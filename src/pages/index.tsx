import { IoReorderThreeOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const HomePage = () => {
  return (
    <div className="flex h-screen w-full flex-col ">
      <header className="flex h-20 w-full flex-row items-center justify-around border-b border-gray-300 bg-white ">
        <div>
          <IoReorderThreeOutline className="text-2xl text-gray-600 " />
        </div>
        <div className="text-xl font-thin ">Ultimate Blog App</div>
        <div className="flex items-center space-x-4">
          <div>
            <BsBell className="text-2xl text-gray-600 " />
          </div>
          <div>
            <div className="h-5 w-5 rounded-full bg-gray-600 "></div>
          </div>
          <div>
            <button className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 text-gray-600 transition hover:border-gray-900 hover:text-gray-900 ">
              <div>Write</div>
              <div>
                <FiEdit />
              </div>
            </button>
          </div>
        </div>
      </header>
      <section className="grid h-full w-full grid-cols-12 place-items-center">
        <main className="col-span-8 h-full w-full border-r border-gray-300 ">
          this is our main section
        </main>
        <aside className="col-span-4 h-full w-full ">
          this is used for side bar
        </aside>
      </section>
    </div>
  );
};

export default HomePage;
