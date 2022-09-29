const API = "https://jsonplaceholder.typicode.com/posts";

export default function Home(props) {
  return (
    <>
      <nav className="bg-white h-12">
        <div className="flex items-center bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 h-16 ">
          <div className="flex ">
            <div className="flex text-black text-2xl items-center mr-60 ml-16 mb-6">
              <h1 className="mr-16">Post - Sesi 12 Next Js</h1>
            </div>
          </div>
        </div>
      </nav>
      <div className=" bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 flex justify-center ">
        <div className=" "></div>

        <div className="text-white  ">
          {props.posts?.map((post) => (
            <tr className="bg-github-blue-b ">
              <td className=" px-1 py-3 border ">Title : {post.title}</td>
            </tr>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(API);
  const posts = await res.json();

  return {
    props: { posts },
  };
}
