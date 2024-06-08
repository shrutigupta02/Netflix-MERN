export default function Card({ item }) {
    return (
        <div className="min-w-80 ml-2 p-5 rounded overflow-hidden shadow-lg bg-inherit transition-transform hover:shadow-red-800/80 hover:scale-105">
            <img className="m-2 max-h-96 min-h-96 w-64 object-cover" src={item.image} alt={item.name} />
            <div className="p-6">
                <h1 className="font-bold text-xl mb-2">{item.name}</h1>
                <p className="text-slate-100 text-base mb-4">{item.description}</p>
                <p className="text-slate-200 text-sm">
                    Genres: {item.genres.slice(0, 2).join(', ')}
                </p>
            </div>
        </div>
    );
}
