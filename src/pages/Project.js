const project=[
    {
        "title":"customer care chatbot",
        "description":"a rasa open-source chatbot for e-commerce that handles FaSquare,chitchat, and sends emails.",
        "image":"https://picsum.photos/300/180?random=1",
        "link":"https://github.com/Horizon733/customer-care-chatbot"
    },
    {
        "title":"customer care chatbot",
        "description":"a rasa open-source chatbot for e-commerce that handles FaSquare,chitchat, and sends emails.",
        "image":"https://picsum.photos/300/180?random=1",
        "link":"https://github.com/Horizon733/customer-care-chatbot"
    },
    {
        "title":"customer care chatbot",
        "description":"a rasa open-source chatbot for e-commerce that handles FaSquare,chitchat, and sends emails.",
        "image":"https://picsum.photos/300/180?random=1",
        "link":"https://github.com/Horizon733/customer-care-chatbot"
    },
]

export  default function Project() {
    return (
        <section className="pt-24 bg-cream dark:bg-gary-900 min-h-screen">
            <div className="conatiner mx-auto px-4">
                <h2 className="text-3xl font-bold text-teal-500 mb-8 text-center">Projects</h2>
                <div className="grid GAP-8 md:grid-cols-3">
                    {project.map((project,idx)=>(
                        <a
                        key={idx}
                        href={project.link}
                        rel="noopener noreferrer"
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg tarnsition p-4 border-t-4 border-orange-400 flex flex-col">
                            <img 
                            src={project.image}
                            alt={project.title}
                            className="rounded mb-4 w-full h-40 object-cover"/>
                            <h3 className="text-xl font-bold text-orange-500 mb-2">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gary-300 flex-1">{project.description}</p>
                            <span className="mt-4 inline-block text-teal-500 font-semibold hover:underline">
                                View on GitHub
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}