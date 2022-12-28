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
As a full stack developer, I have a strong foundation in computer engineering, specifically with a focus on JavaScript frameworks for both frontend and backend development. My bachelor&apos;s degree from Bombay University has given me a solid understanding of the field, and I have applied this knowledge to a number of projects involving Docker and Kubernetes.</p>
    <p>
In addition to my technical skills, I am also highly interested in cybersecurity. I am currently exploring options to pursue a master&apos;s degree in the field, which would allow me to deepen my understanding of the latest security threats and best practices. My passion for cybersecurity, combined with my technical expertise, makes me well-equipped to tackle a variety of challenges in the field of software development and beyond. I am always looking for new opportunities to learn and grow, and I am excited to bring my skills and expertise to new projects and challenges.
    </p>
    </div>
  )
}

export default Bio
