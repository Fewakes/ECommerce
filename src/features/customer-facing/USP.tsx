import { FaFlask } from "react-icons/fa";
import { FaRegFaceGrin } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";

export default function USP() {
  return (
    <section className="mt-20">
      <h2 className="mb-12 text-4xl font-semibold">
        What makes our chairs special
      </h2>
      <div className="flex flex-row justify-between">
        {/* #1 */}
        <div className="flex max-w-[15rem] flex-1 flex-col gap-5">
          <div>
            <FaFlask size={32} color="green" />
          </div>
          <strong className="text-xl">Science meets design</strong>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            similique adipisci praesentium.
          </p>
        </div>

        {/* #2 */}
        <div className="flex max-w-[15rem] flex-1 flex-col gap-5">
          <div>
            <FaRegFaceGrin size={32} color="green" />
          </div>
          <strong className="text-xl">Maximal comfort</strong>
          <p>
            Reprehenderit optio placeat quasi excepturi architecto, explicabo
            facilis perspiciatis error maxime magnam.
          </p>
        </div>

        {/* #3 */}
        <div className="flex max-w-[15rem] flex-1 flex-col gap-5">
          <div>
            <FaRegHeart size={32} color="green" />
          </div>
          <strong className="text-xl">Ethical and sustainable</strong>
          <p>
            Deleniti recusandae quidem nesciunt, eos dolorum iure, quaerat omnis
            est laudantium voluptatem voluptas!
          </p>
        </div>
      </div>
    </section>
  );
}
