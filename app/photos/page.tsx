import Image from 'next/image';
import React from 'react'

interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}


const SeePhotos = async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=50") 
    const photos: Photo[] = await response.json()

  return (
    <>
    <h1 className='text-2xl'>See Photos</h1>
    <section>
        {
            photos.map(photo => <section key={photo.id}>

                <Image
                  src={photo.url}
                  alt={photo.title}
                  width={200}
                  height={600}
                  quality={50}
                />

            </section>)
        }
    </section>
    </>
  )
}

export default SeePhotos