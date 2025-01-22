"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { GoPaste } from "react-icons/go";
import { MdDone } from "react-icons/md";
import { format } from "date-fns";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import { toast } from "react-toastify";
import { TfiControlBackward, TfiControlForward } from "react-icons/tfi";
import { IoIosStarOutline, IoIosStar, IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IoShareSocialOutline } from "react-icons/io5";
import { LiaCommentSolid } from "react-icons/lia";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const Page = ({ params }) => {
  const { slug } = params;
  const [blog, setBlog] = useState(null);
  const [star, setStar] = useState(false);
  const [starCount, setStarCount] = useState(0);
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      const query = `*[_type == "blogs" && slug.current == $slug][0]{..., "previousPost": *[_type == "blogs" && date < ^.date] | order(date desc)[0]{ slug }, "nextPost": *[_type == "blogs" && date > ^.date] | order(date asc)[0]{ slug }}`;
      try {
        const result = await client.fetch(query, { slug });
        setBlog(result);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [slug]);

  // Like Blog
  useEffect(() => {
    const storedLikeStatus = localStorage.getItem(`liked-${slug}`);
    const storedLikeCount = localStorage.getItem(`likeCount-${slug}`);

    if (storedLikeStatus === "true") {
      setLike(true);
    } else {
      setLike(false); // Ensure it's set to false if not liked
    }

    if (storedLikeCount) {
      setLikeCount(parseInt(storedLikeCount, 10));
    }
  }, [slug]);

  useEffect(() => {
    const now = new Date();
    const formattedDate = format(now, 'MMM dd, yyyy | hh:mm:ss a'); // e.g., "Oct 15, 2024 | 05:30:40 PM"
    setCurrentDateTime(formattedDate);
  }, []);
  
  // Add the toggle functionality to like/unlike the blog
  const handleLikeMark = () => {
    const storedLikeStatus = localStorage.getItem(`liked-${slug}`);

    if (storedLikeStatus === "true") {
      // User has already liked the blog, now unlike
      setLike(false);
      toast.warning("Unliked the blog!", { autoClose: 2000 });
      setLikeCount((prevCount) => {
        const updatedCount = prevCount - 1;
        localStorage.setItem(`likeCount-${slug}`, updatedCount.toString());
        return updatedCount;
      });
      localStorage.setItem(`liked-${slug}`, "false"); // Update to unlike in localStorage
    } else {
      // User is liking the blog
      setLike(true);
      toast.success("Liked blog!", { autoClose: 2000 });
      setLikeCount((prevCount) => {
        const updatedCount = prevCount + 1;
        localStorage.setItem(`likeCount-${slug}`, updatedCount.toString());
        return updatedCount;
      });
      localStorage.setItem(`liked-${slug}`, "true"); // Mark as liked in localStorage
    }
  };

  // CodeBlock component for rendering code with copy functionality
  const CodeBlock = ({ value }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText(value.code);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    };

    return (
      <div className="hover:shadow-xl shadow-pink-400 rounded-lg w-full">
        <div className="flex items-center justify-between bg-[#1d1d1d] rounded-t-lg text-base px-4 py-2 font-medium">
          <div className="flex space-x-2">
            <span className="bg-red-500 rounded-full w-3 h-3"></span>
            <span className="bg-yellow-500 rounded-full w-3 h-3"></span>
            <span className="bg-green-500 rounded-full w-3 h-3"></span>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className={`flex items-center text-sm font-light space-x-2 pb-1 ${isCopied ? "text-blue-600" : "text-white"
              }`}
          >
            <span>{isCopied ? <MdDone /> : <GoPaste />}</span>
            <span>{isCopied ? "Copied!" : "Copy"}</span>
          </button>
        </div>
        <SyntaxHighlighter
          language={value.language || "javascript"}
          style={atomOneDark}
          customStyle={{
            padding: "1.5rem",
            borderRadius: "0 0 0.5rem 0.5rem",
            background: "#0f0f0f",
          }}
          wrapLongLines={true}
          className="text-sm font-light dark:border border-zinc-800"
        >
          {value.code}
        </SyntaxHighlighter>
      </div>
    );
  };

  // Sanity PortableText custom components
  const components = {
    types: {
      image: ({ value }) => (
        <Image
          src={urlFor(value.asset).url()}
          alt={value.attribution || "Blog image"}
          width={1500}
          height={500}
          priority
          className="border border-zinc-800 rounded-lg my-2 w-full h-full"
        />
      ),
      code: CodeBlock,
    },
    block: {
      h1: ({ children }) => (
        <h1 className="text-4xl font-medium text-zinc-200 my-2">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-3xl font-medium text-zinc-200 my-2">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-2xl font-medium text-zinc-200 my-2">{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-xl font-medium text-zinc-200 my-2">{children}</h4>
      ),
      h5: ({ children }) => (
        <h5 className="text-lg font-light text-white my-2 py-1 rounded-lg bg-yellow-500/[0.3] whitespace-nowrap overflow-auto opacity-50 w-full">
          <span className="sticky left-0 z-20 py-2 px-3 rounded-lg rounded-r-none bg-gradient-to-r from-yellow-500 to-yellow-400">✦</span>
          <span className="p-2">{children}</span>
        </h5>
      ),
      normal: ({ children }) => (
        <p className="text-base text-zinc-400 leading-relaxed mb-2">{children}</p>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc text-zinc-400 my-2 py-3 px-7 bg-zinc-900 rounded-lg opacity-90">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal pl-5 text-zinc-400 my-2">{children}</ol>
      ),
      square: ({ children }) => (
        <ul className="list-square pl-5 text-purple-500 my-2">{children}</ul>
      ),
      circle: ({ children }) => (
        <ul className="list-circle pl-5 text-green-400 my-2">{children}</ul>
      ),
      alpha: ({ children }) => (
        <ol className="list-[lower-alpha] pl-5 text-pink-400 my-2">{children}</ol>
      ),
      roman: ({ children }) => (
        <ol className="list-[upper-roman] pl-5 text-red-400 my-2">{children}</ol>
      ),
    },
    marks: {
      link: ({ children, value }) => {
        const target = value.href.startsWith("http") ? "_blank" : undefined;
        return (
          <Link
            href={value.href}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            className="text-blue-600 hover:text-green-500"
          >
            {children}
          </Link>
        );
      },
    },
  };

  if (!blog) {
    return <p className="text-center text-zinc-500">Loading blog...</p>;
  }

  const handleStarMark = () => {
    if (star === false) {
      setStar(true);
      toast.success("Star marked the blog!", { autoClose: 2000 });
      setStarCount((prevCount) => {
        const updatedCount = prevCount + 1;
        localStorage.setItem(`starCount-${slug}`, updatedCount.toString()); // Store the updated star count
        return updatedCount;
      });
    } else {
      setStar(false);
      toast.warning("Unstared the blog!", { autoClose: 2000 });
      setStarCount((prevCount) => {
        const updatedCount = prevCount - 1;
        localStorage.setItem(`starCount-${slug}`, updatedCount.toString()); // Store the updated star count
        return updatedCount;
      });
    }
    localStorage.setItem(`starMark-${slug}`, (!star).toString()); // Store star status
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new comment to the comments array
    setComments((prevComments) => [
      ...prevComments,
      { name, email, message, id: Date.now() },
    ]);

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`http://localhost:3000/blogs/${slug}`); // Copies the link to the clipboard
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
    toast.success("Link copied to clipboard!", { autoClose: 2000 });
  };


  return (
    <>
      <title>{`${blog.title} | Blog`}</title>
      <main className="flex flex-col items-center justify-center m-auto p-20">
        {/* Navigation Links */}
        <div className="flex items-center justify-between sticky top-20 font-light text-zinc-700 w-full">
          {blog.previousPost ? (
            <Link
              href={`/blogs/${blog.previousPost.slug.current}`}
              className="flex items-center space-x-2 hover:text-zinc-200 focus:text-blue-600 p-2 leading-3 pl-3 pr-5 hover:bg-zinc-900 rounded-full hover:scale-105 transition-transform"
            >
              <TfiControlBackward className="w-6 h-6" />
              <span>Back</span>
            </Link>
          ) : (
            <div />
          )}
          {blog.nextPost ? (
            <Link
              href={`/blogs/${blog.nextPost.slug.current}`}
              className="flex items-center space-x-2 hover:text-zinc-200 focus:text-blue-600 p-2 leading-3 pr-3 pl-5 hover:bg-zinc-900 rounded-full hover:scale-105 transition-transform"
            >
              <span>Next</span>
              <TfiControlForward className="w-6 h-6" />
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Blog Content */}
        <div className="w-[25rem] sm:w-[30rem] md:w-[40rem] xl:w-[50rem]">
          <div className="flex items-end justify-between mb-5 pb-5 border-b border-zinc-700 w-full">
            <div className="flex flex-col items-start space-y-2">
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                {blog.title}
              </h1>
              <p className="text-sm text-zinc-500">
                {blog.date
                  ? format(new Date(blog.date), "MMM dd, yyyy")
                  : "No Date"}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleStarMark}
                aria-label={star ? "Unstar" : "Star"}
                aria-pressed={star}
                className="flex items-center rounded-full w-8 h-8"
              >
                {star ? (
                  <IoIosStar className="text-yellow-400 hover:scale-105 transition-transform w-full h-full" />
                ) : (
                  <IoIosStarOutline className="text-zinc-700 hover:scale-105 transition-transform w-full h-full" />
                )}
              </button>
              <p className="text-3xl font-thin text-zinc-400">
                {starCount}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start space-y-5 text-zinc-200">
            <PortableText value={blog.content} components={components} />
          </div>
          <div className="inline-flex items-center p-2 mt-10 space-x-2 text-zinc-400 dark:text-zinc-600 border border-zinc-200 dark:border-zinc-800 rounded-full hover:scale-110 transition-transform hover:shadow-lg shadow-zinc-300 dark:shadow-black">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" onClick={handleLikeMark}
                    aria-label={like ? "Liked" : "Like"}
                    aria-pressed={like}
                    className="text-2xl hover:scale-105 transition-transform rounded-full hover:shadow-md shadow-zinc-300 dark:shadow-black w-10 h-10"
                  >
                    {like ? (
                      <IoMdHeart className="text-rose-600" />
                    ) : (
                      <IoMdHeartEmpty />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{`${likeCount} Likes on blog page`}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Dialog>
                <DialogTrigger>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="hover:scale-105 transition-transform rounded-full hover:shadow-md shadow-zinc-300 dark:shadow-black w-10 h-10">
                        <LiaCommentSolid className="text-2xl" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Make Comments on blog</p>
                    </TooltipContent>
                  </Tooltip>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Comment Message</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="grid gap-4 text-sm pt-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">Name</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="col-span-3 p-2"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="col-span-3 p-2"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="message" className="text-right">Message</Label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="col-span-3 p-2 border border-zinc-300 rounded-md"
                        required
                      />
                    </div>
                    <DialogFooter>
                      <Button type="submit">Submit Comment</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </TooltipProvider>
            <TooltipProvider>
              <Dialog>
                <DialogTrigger>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="hover:scale-105 transition-transform rounded-full hover:shadow-md shadow-zinc-300 dark:shadow-black w-10 h-10">
                        <IoShareSocialOutline className="text-2xl" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Share blog page link</p>
                    </TooltipContent>
                  </Tooltip>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Share link</DialogTitle>
                  </DialogHeader>
                  <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link" className="sr-only">
                        Link
                      </Label>
                      <Input
                        id="link"
                        defaultValue={`http://localhost:3000/blogs/${slug}`}
                        readOnly
                      />
                    </div>
                    <Button type="submit" size="icon" onClick={handleCopyLink}>
                      {isCopied ? <MdDone className="text-xl text-green-500" /> : <GoPaste className="text-xl" />}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </TooltipProvider>
          </div>

          {/* Comments Section */}
          <div className="mt-10">
            <h3 className="text-lg font-medium">Comments :</h3>
            {comments.length === 0 ? (
              <p className="text-sm text-zinc-500">No comments yet.</p>
            ) : (
              <ul className="space-y-4 mt-4 w-1/2">
                {comments.map((comment) => (
                  <li key={comment.id} className="px-4 pb-2 border rounded-lg">
                    <div className="flex items-center space-x-2 pt-4 pb-2 w-full">
                      <Image src="/user.png" alt="user" className="w-10" width={100} height={100} />
                      <div className="flex flex-col items-start whitespace-nowrap overflow-auto w-full">
                        <p className="flex items-center space-x-2 text-base font-bold"><span className="text-black dark:text-white">{comment.name}</span><span className="text-sm text-zinc-500 font-light"> | {comment.email}</span></p>
                        <span className="text-xs text-zinc-400 dark:text-zinc-600">{currentDateTime}</span>
                      </div>
                    </div>
                    <p className="text-sm pb-4 text-zinc-500 dark:text-zinc-600 overflow-y-auto h-14">{comment.message}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>


      </main>
    </>
  );
};

export default Page;