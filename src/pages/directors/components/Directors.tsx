import { directors as directors_ } from "../../../components/directors"

type Directors = {
    id: number, 
    image: string,
    name: string,
    role: string,
    description: string,
} 

const Directors = () => {

 const directors: Directors[] = directors_;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
       { directors.map( (director: Directors) => {
          return (
             <div className="bg-white p-5 shadow-xl rounded-2xl" key={director.id}>
                <img 
                    src={director.image} alt={`${director.name}'s image`}
                    className="h-[150px] w-[150px] rounded-full block object-cover mx-auto"
                />
                <h2 className="text-lg mt-3 text-blue-950 text-center">
                    {director.name}
                </h2>
                <h2 className="text-md mt-1 text-blue-950 text-center">
                    {director.role}
                </h2>
                <p style={{lineHeight: 1.8}} className=" font-light text-sm text-justify">
                     {director.description}
                </p>
             </div>
          )
       })}
    </section>
  )
}
 
export default Directors