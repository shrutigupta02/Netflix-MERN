import Card from "./Card";

export default function CardSlider({ title, arr }) {
    return (
        <div className="bg-black text-slate-200 py-2">
            <h3 className="m-6 text-2xl font-semibold mb-2">{title}</h3>
            <div className="overflow-x-auto whitespace-no-wrap scrollbar-hide">
                <div className="flex space-x-4 p-4">
                    {arr.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
