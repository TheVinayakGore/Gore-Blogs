"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { client } from "@/sanity/lib/client";
import { format } from "date-fns";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const query = `*[_type == "blogs"]{
        title,
        desc,
        slug,  // Include slug in the fetch query
        image{
          asset->{
            _id,
            url
          }
        },
        date,
      }`;
      try {
        const result = await client.fetch(query);
        setBlogs(result);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <main
        id="blogs"
        className="flex flex-col space-y-14 relative p-5 sm:p-10 md:p-14 lg:p-20 xl:p-24 border-b border-zinc-200 dark:border-zinc-800 "
      >
        <h1 className="text-start text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
          Blogs
        </h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="group bg-white dark:bg-zinc-900 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
            >
              {blog.image?.asset?.url && (
                <Image
                  src={blog.image.asset.url}
                  alt={blog.image?.attribution || blog.title}
                  width={1000}
                  height={1000}
                  priority
                  className="shadow-lg shadow-zinc-300 dark:shadow-black rounded-lg group-transition group-hover:scale-110 duration-200 w-full h-48"
                />
              )}
              <div className="flex flex-col items-start space-y-5 p-3">
                <div className="flex flex-col space-y-2 p-2">
                  <h3 className="text-2xl font-bold">{blog.title}</h3>
                  <p className="mt-2">{blog.desc}</p>
                  <p className="mt-2">
                    {blog.date
                      ? format(new Date(blog.date), "MMM dd, yyyy")
                      : "No Date"}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  className="py-5 rounded-lg border-0 hover:shadow-lg hover:bg-blue-500 dark:hover:bg-blue-600 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition hover:scale-105"
                  asChild
                >
                  {/* Updated Link href to include blog slug */}
                  <Link
                    href={`/blogs/${blog.slug.current}`}
                    target="_blank"
                    className="flex items-center space-x-3"
                  >
                    <span>Read More</span>
                    <BsArrowRight />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
};

export default Blogs;
