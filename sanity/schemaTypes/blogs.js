const blogs = {
    name: 'blogs',
    title: 'Blogs',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required().min(5),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title', // Automatically generate slug from the title field
                maxLength: 96,   // Limit the slug length
            },
            validation: Rule => Rule.required(),
        },
        {
            title: 'Short Description',
            name: 'desc',
            type: 'text',
            validation: Rule => Rule.required().min(5),
        },
        {
            name: 'image',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true, // Enables image cropping in the studio
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'date',
            title: 'Date',
            type: 'datetime',
            options: {
                dateFormat: 'YYYY-MM-DD',
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                { type: 'block' },
                {
                    title: 'Image',
                    name: 'image',
                    type: 'image',
                    options: {
                        hotspot: true
                    },
                    fields: [
                        {
                            title: 'Attribution',
                            name: 'attribution',
                            type: 'string',
                        }
                    ]
                },
            ],
            validation: Rule => Rule.required(),
        },
    ],
};

export default blogs;