import Card from "./Card"
function Test() {

  return (
    <>
      <Card title="Master MERN stack" description=" Learn not only Mongo, Express, React, and Node, but also deployment (AWS/Netlify), testing, authentication,  DevOps,Git, CI/CD, project architecture, JWT security, and scalable state management" price=" $ 99" course="MERN" hours="40 hours" />
      <br />
      <Card title="AI/Ml" description="Learn to implement deep learning models using cutting-edge tools like TensorFlow and PyTorch to deliver smart, adaptive solutions that transform data into actionable insights." price="$999" course="Ai/ml" hours="80 hours" />
    </>
  )
}
export default Test