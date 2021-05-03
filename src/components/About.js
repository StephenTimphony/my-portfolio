import {  useEffect, useState } from 'react';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from "@sanity/block-content-to-react";
import image from '../neworleanas.jpg';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source)
}

const About = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
    .fetch(
      `*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data)=> setAuthor(data[0]))
      .catch(console.error)

  }, []);

  if(!author) return <div> Loading...</div>
  return (
    <main className="relative">
      <img 
      src = {image} 
      alt="Bourbon Street" 
      className="absolute object-cover w-full h-full"/>
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className ="bg-blue-900 rounded-lg shadow-2xl lg:flex p-20">
          <img src={urlFor(author.authorImage).url()} className="rounded w-40 h-40 lg:w-72 lg:h-52 mr-8" alt={author.name}/>
          <div className="text-lg flex flex-col justify-center">
            <h1 className=" roboto text-6xl text-green-300 mb-4">
              <span className="text-green-100"> {author.name}</span></h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent 
                blocks={author.bio} 
                projectId="oelal74o" 
                dataset="production"
                />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
export default About;