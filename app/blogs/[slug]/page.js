"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"; 
import { client } from "@/sanity/lib/client";
import { format } from "date-fns";

const Page = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    const fetchBlogs = async () => {
      const query = `*[_type == "blogs"]{
        title,
        slug,   // Fetch the slug to link to the blog page
        desc,
        image{
          asset->{
            _id,
            url
          },
          attribution  // Fetch attribution if available
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
    <main className="py-32 px-60">
      <div className="">
        {blogs?.map((blog, index) => (
          <div
            key={index}
            className=""
          >
            {blog.image?.asset?.url && (
              <Image
                src={blog.image.asset.url}
                alt={blog.image?.attribution || blog.title}
                width={2000}
                height={2000}
                priority
                className="shadow-xl shadow-zinc-300 dark:shadow-black rounded-xl w-full h-full"
              />
            )}
            <div className="flex flex-col items-start space-y-5 p-3">
              <div className="flex flex-col space-y-2 p-2">
                <h3 className="text-2xl font-bold">{blog.title}</h3>
                <p className="mt-2">
                  {blog.date
                    ? format(new Date(blog.date), "MMM dd, yyyy")
                    : "No Date"}
                </p>
                <p className="mt-2">{blog.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;