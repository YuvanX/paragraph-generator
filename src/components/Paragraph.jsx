import { useState } from "react"


export function Paragraph() {
    const [input, setInput] = useState("");
    const [paragraph,setParagraph] = useState("");

    function generatePara(length) {
    
        const words = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];
        let paragraph = "";

        for(let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * words.length)
            paragraph = paragraph + words[randomIndex] + " ";
        }

        return setParagraph(paragraph.trim() + '.')
    }

    return <div className="p-4">
        <div className="flex sm:justify-center">
            <div className="text-3xl font-bold sm:m-5 md:m-2">Paragraph generator</div>
        </div>
        
        <input type="text" className="border p-4 w-3/4 xl:ml-24 lg:ml-28 md:ml-5 " placeholder="Enter Number of Words" onChange={(e) => {
            setInput(e.target.value)
        }} />

        <button onClick={() => {
            let length = parseInt(input)
            generatePara(length)
        }} className="p-4 bg-black text-white sm:m-5  rounded">Generate</button>
        <div className="mt-4">{paragraph}</div>
    </div>
}