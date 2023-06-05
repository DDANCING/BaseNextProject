export default function Home() {
  return (
    <div className="h-screen w-screen scroll-auto bg-Smartaviblack-100">
      <div className="absolute left-[-63px] top-[-765] h-[1458px] w-[1492px] rounded-full bg-Smartavigreen-200 opacity-10 blur-3xl"></div>
      <div className="">
        <header className="absolute left-0 top-0 h-[130px] w-[1366px]">
          header
        </header>
        <main className="grid grid-cols-3 ">
          <div className=" grid gap-10 ">
            <div className="absolute left-[2.375rem] top-[8.125rem] h-[334px] w-[220px] rounded bg-Smartaviblack-50 opacity-40"></div>
            <div className="absolute left-[38px] top-[515px] h-[121px] w-[220px] rounded bg-Smartaviblack-50 opacity-40">
              002
            </div>
          </div>
          <div className="absolute left-[18.563rem] top-[130px] h-[506px] w-[760px] flex-1 rounded bg-Smartaviblack-50 opacity-40">
            02
          </div>
          <div className="absolute left-[1098px] top-[130px] h-[506px] w-[220px] flex-1 rounded bg-Smartaviblack-50 opacity-40">
            03
          </div>
        </main>
        <footer className="flex-2 absolute left-[38px] top-[664px] h-[80px] w-[1280px] rounded bg-Smartaviblack-50 opacity-40">
          footer
        </footer>
      </div>
    </div>
  )
}
