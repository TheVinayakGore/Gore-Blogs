const code = {
    name: "code",
    type: "object",
    title: "Code Block",
    fields: [
        {
            name: "language",
            type: "string",
            title: "Programming Language",
            options: {
                list: [
                    { title: "JavaScript", value: "javascript" },
                    { title: "Python", value: "python" },
                    { title: "Java", value: "java" },
                    { title: "HTML", value: "html" },
                    { title: "CSS", value: "css" },
                    { title: "C++", value: "cpp" },
                    { title: "C#", value: "csharp" },
                    { title: "Ruby", value: "ruby" },
                    { title: "PHP", value: "php" },
                    { title: "Go", value: "go" },
                    { title: "Swift", value: "swift" },
                    { title: "Kotlin", value: "kotlin" },
                    { title: "TypeScript", value: "typescript" },
                    { title: "Rust", value: "rust" },
                    { title: "Dart", value: "dart" },
                    { title: "SQL", value: "sql" },
                ],
            },
        },
        {
            name: "code",
            type: "text",
            title: "Code",
            validation: (Rule) => Rule.required(),
        },
    ],
};

export default code;