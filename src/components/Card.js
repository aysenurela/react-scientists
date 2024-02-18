export default function Card({children}) {
    if (!children) {
        return null;
    }

    return (
        <div className="Card">
            {children}
        </div>
    );
}