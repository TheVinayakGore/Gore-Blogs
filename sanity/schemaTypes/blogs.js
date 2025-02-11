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
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                {
                    type: "block", styles: [
                        { title: "Normal", value: "normal" },
                        { title: "Heading 1", value: "h1" },
                        { title: "Heading 2", value: "h2" },
                        { title: "Heading 3", value: "h3" },
                        { title: "Heading 4", value: "h4" },
                        { title: "Heading 5", value: "h5" },
                        { title: "Divider", value: "hr" },
                    ],
                    lists: [
                        { title: "Bullet", value: "bullet" },
                        { title: "Numbered", value: "number" },
                        { title: "Square", value: "square" },
                        { title: "Circle", value: "circle" },
                        { title: "Alphabet", value: "alpha" },
                        { title: "Roman", value: "roman" },
                    ],
                },
                {
                    title: "Code Block",
                    type: "code",
                    options: {
                        language: "javascript",
                    },
                },
                {
                    title: "Image",
                    name: "image",
                    type: "image",
                    options: {
                        hotspot: true,
                    },
                },
            ],
        },
    ],
};

export default blogs;