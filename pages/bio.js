import Image from 'next/image'
const Bio = () => {
  return (
    <div className="mt-3">
                <Image
                  src='/jfksps_using_this_image_male_a_cartoon_style_image_8b4093f5-1e2d-4dc1-b93c-7bfebd264742.png'
                  className="img-fluid mt-1 rounded-start"
                  alt="thumbnail"
                  width={500}
                  height={400}
                  objectFit="cover"
                />
      <h3>Kshitij Tapre</h3>
    <p>
Hi there! I am a fullstack developer with a strong background in Javascript. I have experience working with a variety of stacks, including MERN and MEAN, and have completed several projects using these technologies. In addition to my technical skills, I am also proficient in containerisation and have experience deploying projects using cloud service providers such as AWS and GCP.

</p><p>I received my bachelor's degree in Computer Engineering from Xaviers Institute of Engineering in Mahim. During my time there, I gained a solid foundation in computer science principles and developed a passion for software development. Since then, I have continued to grow my skillset through personal projects and professional experience.

</p><p>One of my proudest professional achievements to date was the successful deployment of a project for a major healthcare company. Not only did I utilize my technical skills to build the application, but I also worked closely with the client to gather requirements and ensure that the final product met their needs.

</p><p>In my free time, I enjoy staying up to date with the latest developments in the tech industry and participating in hackathons and coding challenges. I am always looking for new opportunities to learn and grow as a developer, and am excited to see where my career takes me next.
    </p>
    </div>
  )
}

export default Bio
