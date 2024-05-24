import Image from "next/image"

export default function Skills() {
     

    return (
        <div className="skill_wrapper bg-yellow-600  h-[20rem]">
            <h1 className="text-white">Skills</h1>
        <div className="skills flex flex-row justify-between bg-slate-200 opacity-80 p-10">
        <Image src={'/icons8-html-logo-48.png'} height={50} width={60}></Image>
        <Image src={'/icons8-css-48.png'} height={50} width={60}></Image>
        <Image src={'/icons8-js-48.png'} height={50} width={60}></Image>
        <Image src={'/icons8-node-js-48.png'} height={50} width={60}></Image>
        <Image src={'/icons8-express-js-50.png'} height={50} width={60}></Image>
        <Image src={'/icons8-mongo-db-48.png'} height={50} width={60}></Image>
        <Image src={'/next-js-logo-7929BCD36F-seeklogo.com.png'} height={72} width={72}></Image>
        <Image src={'/react.png'} height={60} width={60}></Image>
        </div>
        </div>
    )
}