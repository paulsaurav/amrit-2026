import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Schedule() {
  return (
    <section className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <div className="flex-1 mx-auto w-full max-w-[1050px] px-4 mt-14 pb-16">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide uppercase">
          Tentative Programme Schedule
        </h1>

        <p className="mt-8 text-lg md:text-xl font-semibold">To be updated</p>

        {/* AMRIT-2025 programme, kept for reference until the 2026 schedule is
            finalised. Inner {/_* DAY n *_/} markers were demoted to plain labels
            so this stays a single JSX comment.
        <div className="overflow-x-auto mt-8">
          <table className="table w-full bg-white">
            <thead className="hidden">
              <tr>
                <th>Event</th>
                <th>Time</th>
              </tr>
            </thead>

            <tbody>
              DAY 1
              <tr className="[&>*]:border border-black">
                <td colSpan={2} className="bg-gray-100 font-bold">
                  DAY1: 22 December, 2025 (Silchar Campus)
                </td>
              </tr>
              <tr className="[&>*]:border border-black">
                <td>Inaugural Session</td>
                <td>10:00 AM IST</td>
              </tr>
              <tr className="[&>*]:border border-black">
                <td>Keynote Address1</td>
                <td>11:00 AM IST</td>
              </tr>
              <tr className="[&>*]:border border-black">
                <td>Poster Presentation</td>
                <td>12:00 Noon IST</td>
              </tr>
              <tr className="[&>*]:border border-black">
                <td colSpan={2}>LUNCH BREAK</td>
              </tr>
              <tr className="[&>*]:border border-black">
                <td>Invited Talk1</td>
                <td>2:00 PM IST</td>
              </tr>
              <tr className="[&>*]:border border-black">
                <td>Technical Session 1</td>
                <td>3:00 PM–5:00 PM IST</td>
              </tr>
              <tr className="[&>*]:border border-black">
                <td>Technical Session 2</td>
                <td>3:00 PM–5:00 PM IST</td>
              </tr>
              <tr className="[&>*]:border border-black">
                <td>Cultural Programme</td>
                <td>5:00 PM–6:00 PM IST</td>
              </tr>

              DAY 2
              <tr className="[&>*]:border border-black">
                <td colSpan={2} className="bg-gray-100 font-bold">
                  DAY2: 23 December, 2025
                </td>
              </tr>
              <tr className="[&>*]:border border-black">
                <td colSpan={2}>Site Seeing</td>
              </tr>

              DAY 3
              <tr className="[&>*]:border border-black">
                <td colSpan={2} className="bg-gray-100 font-bold">
                  DAY3: 24 December, 2025 (Diphu Campus)
                </td>
              </tr>
              <tr className="[&>*]:border border-black">
                <td>Keynote Address2</td>
                <td>11:00 AM IST</td>
              </tr>
              <tr className="[&>*]:border border-black">
                <td>Invited Talk2</td>
                <td>12:00 AM IST</td>
              </tr>
              <tr className="[&>*]:border border-black">
                <td>Poster Presentation</td>
                <td>1:00 PM IST</td>
              </tr>
              <tr className="[&>*]:border border-black">
                <td colSpan={2}>LUNCH BREAK</td>
              </tr>
              <tr className="[&>*]:border border-black">
                <td>Valedictory</td>
                <td>3:00 PM IST</td>
              </tr>
            </tbody>
          </table>
        </div>
        */}
      </div>
      <Footer />
    </section>
  );
}