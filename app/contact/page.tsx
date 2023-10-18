
export default function Contact(){
    return (
        <main>
            <div className="continer">
                <textarea placeholder="write ur msg"></textarea>
                <button>send msg</button>
            </div>
            <div className="continer">
                <p>Join my Newsletter</p>
                <div className="flex">
                    <input type="email" placeholder="type ur email" />
                    <button>Join newletter</button>
                </div>
            </div>
        </main>
    )
}