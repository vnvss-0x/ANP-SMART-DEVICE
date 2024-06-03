function PageComponent({ title, buttons="", children}) {
    return (
        <>
            <div
                className={
                    "flex justify-between items-center shadow-md p-3 text-left flex-col animate-fade-in-down "
                }
            >
                <h3 className="text-2xl text-white font-semibold">{title}</h3>
                {buttons}
            </div>
        </>
    );
}

export default PageComponent;
