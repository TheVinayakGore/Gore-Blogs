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
        desc, // Short description from your schema
        slug, // Include slug in the fetch query
        coverImage { // Use coverImage as per your schema
          asset->{
            _id,
            url
          }
        },
        date
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
        className="flex flex-col items-start space-y-20 py-20 max-w-7xl w-full mx-auto"
      >
        <h1 className="text-start text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
          Blogs
        </h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full">
          {blogs.map((blog, index) => (
            <Link
              href={`/blogs/${blog.slug.current}`}
              target="_blank"
              key={index}
              className="group bg-white dark:bg-zinc-900 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out w-full"
            >
              {blog.coverImage?.asset?.url && (
                <Image
                  src={blog.coverImage.asset.url}
                  alt={blog.coverImage?.attribution || blog.title}
                  width={1000}
                  height={1000}
                  priority
                  className="shadow-lg shadow-zinc-300 dark:shadow-black border border-zinc-400 dark:border-zinc-800 rounded-lg w-full h-56"
                />
              )}
              <div className="flex flex-col items-start space-y-5 p-3">
                <div className="flex flex-col items-start p-2">
                  <h3 className="text-xl font-medium">{blog.title}</h3>
                  <p className="text-sm text-zinc-400 dark:text-zinc-600">
                    {blog.date
                      ? format(new Date(blog.date), "MMM dd, yyyy")
                      : "No Date"}
                  </p>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    {blog.desc.slice(0, 100)}...
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
};

export default Blogs;
