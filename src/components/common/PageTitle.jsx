function PageTitle({title, description}) {
    return(
        <div className="w-full max-w-4xl flex flex-col justify-center items-center - gap-5">
            <div className="w-full text-left">
                <h1 className="text-2xl font-bold text-gray-900 font-['Outfit'] tracking-tight">
                    {title}
                </h1>
                <p className="text-sm text-gray-500">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default PageTitle;