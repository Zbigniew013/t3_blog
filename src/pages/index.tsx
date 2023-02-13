import { IoReorderThreeOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";

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
        <main className="col-span-8 h-full w-full border-r border-gray-300 px-24 ">
          <div className="flex w-full flex-col space-y-4 py-10 ">
            <div className="flex w-full items-center space-x-4 ">
              <label
                htmlFor="search"
                className="relative w-full rounded-3xl border border-gray-800 "
              >
                <div className="absolute left-2 flex h-full items-center  ">
                  <CiSearch />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search..."
                  className="w-full rounded-3xl py-1 px-4 pl-8 text-sm outline-none placeholder:text-sm placeholder:text-gray-300 "
                />
              </label>
              <div className="flex w-full items-center justify-end space-x-4 ">
                <div>My topics:</div>
                <div className="flex items-center space-x-2 ">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-3xl bg-gray-200/50 px-4 py-3"
                    >
                      tag {i}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex w-full items-center justify-between border-b border-gray-300 pb-8 ">
              <div>Articles</div>
              <div>
                <button className="flex items-center space-x-2 rounded-3xl border border-gray-800 px-4 py-1.5 font-semibold  ">
                  <div>Following</div>
                  <div>
                    <HiChevronDown className="text-xl  " />
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col justify-center space-y-8 ">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="group flex flex-col space-y-4 border-b border-gray-300 pb-8 last:border-none "
              >
                <div className="flex w-full items-center space-x-2 ">
                  <div className="h-10 w-10  rounded-full bg-gray-400 "></div>
                  <div>
                    <p className="font-semibold">
                      Zbigniew Szałkowski &#x2022; 22 Dec. 2022
                    </p>
                    <p className="text-sm">Father & developer</p>
                  </div>
                </div>
                <div className="grid w-full grid-cols-12 gap-4 ">
                  <div className="col-span-8 flex flex-col space-y-4">
                    <p className="text-2xl font-bold text-gray-800 decoration-indigo-600 group-hover:underline ">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ab sequi dolorem!
                    </p>
                    <p className="break-words text-sm text-gray-500 ">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Odit recusandae numquam quia repellendus, reprehenderit
                      consectetur aut quas ab perferendis error suscipit facere.
                      Repellendus voluptatum labore at illo magni et
                      perspiciatis eligendi inventore nemo aliquid magnam soluta
                      reprehenderit, explicabo odit molestiae ipsam delectus
                      velit fugiat reiciendis voluptatem debitis voluptates
                      dicta sapiente. Consectetur ratione magnam quasi facere
                      illo odit excepturi, repellendus doloribus.
                    </p>
                  </div>
                  <div className="col-span-4">
                    <div className="h-full w-full transform rounded-xl bg-gray-300 transition duration-300 hover:scale-105 hover:shadow-xl "></div>
                  </div>
                </div>
                <div>
                  <div className="flex w-full items-center justify-start space-x-4 ">
                    <div className="flex items-center space-x-2 ">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div
                          key={i}
                          className="rounded-2xl bg-gray-200/50 px-5 py-3  "
                        >
                          tag {i}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        <aside className="col-span-4 h-full w-full ">
          this is used for side bar
        </aside>
      </section>
    </div>
  );
};

export default HomePage;
