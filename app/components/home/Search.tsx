export default function Search() {
    return (
        <div className="mt-4 flex justify-center px-6 lg:px-60">
            <input 
                type="text" 
                className="w-full max-w-[600px] border-2 border-gray-400 rounded-[8px] p-3"
                placeholder="Search Products..."
            />
        </div>
    )
}