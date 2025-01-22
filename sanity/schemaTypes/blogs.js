const blogs = {
    name: "blogs",
    title: "Blogs",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "date",
            title: "Date",
            type: "datetime",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "desc",
            title: "Short Description",
            type: "text",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "coverImage",
            title: "Cover Image",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt",
                    title: "Alternative Text",
                    type: "string",
                    description: "Important for accessibility and SEO. Describe the image.",
                },
            ],
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                { type: "block" },
                { type: "code" },
                {
                    title: "Image",
                    name: "image",
                    type: "image",
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: "alt",
                            title: "Alternative Text",
                            type: "string",
                        },
                    ],
                },
            ],
        },
    ],
};

export default blogs;