import "./App.css";
import avatar1 from "./assets/image-daniel.jpg";
import avatar2 from "./assets/image-jonathan.jpg";
import avatar3 from "./assets/image-jeanette.jpg";
import avatar4 from "./assets/image-patrick.jpg";
import avatar5 from "./assets/image-kira.jpg";

function App() {
  return (
    <main className="w-full h-screen grid grid-cols-1 grid-rows-8 gap-y-8 p-5 md:grid-cols-4 md:grid-rows-2 md:px-44 md:py-32 md:gap-4">
      <div id="purple" className="min-w-[375px] w-full h-auto flex flex-col p-8 bg-purple-600 rounded-[14px] md:col-span-2">
          <div className="relative flex items-center gap-4 mb-3">
            <img
              className="rounded-full border-2 w-10 h-10"
              src={avatar1} 
              alt="avatar-1" />
            <div className="flex flex-col">
              <p className="text-white">Daniel Clifford</p>
              <small className="text-zinc-200">Verified Graduate</small>
            </div>
          </div>
          <h2 className="text-white text-2xl mb-3 font-bold">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny’s worth.
          </h2>
          <blockquote className="text-zinc-200">
            “ I was an EMT for many years before I joined the bootcamp. I’ve been
            looking to make a transition and have heard some people who had an
            amazing experience here. I signed up for the free intro course and
            found it incredibly fun! I enrolled shortly thereafter. The next 12
            weeks was the best - and most grueling - time of my life. Since
            completing the course, I’ve successfully switched careers, working as
            a Software Engineer at a VR startup. ”
          </blockquote>
        </div>

      <div className="min-w-[375px] w-full h-auto flex flex-col p-8 bg-slate-700 rounded-[14px]">
        <div className="relative flex items-center gap-4 mb-3">
          <img
            className="rounded-full border-2 w-10 h-10"
            src={avatar2} 
            alt="avatar-2" />
          <div className="flex flex-col">
            <p className="text-white">Jonathan Walters</p>
            <small className="text-zinc-200">Verified Graduate</small>
          </div>
        </div>
        <h2 className="text-white text-2xl mb-3 font-bold">
        The team was very supportive and kept me motivated
        </h2>
        <blockquote className="text-zinc-200">
        “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
          for a big company. This was one of the best investments I’ve made in myself. ”
        </blockquote>
      </div>

      <div className="min-w-[375px] w-full h-auto flex flex-col p-8 bg-white rounded-[14px] md:row-span-2  md:px-12 shadow-2xl">
        <div className="relative flex items-center gap-4 mb-3">
          <img
            className="rounded-full border-2 w-10 h-10"
            src={avatar5} 
            alt="avatar-5" />
          <div className="flex flex-col">
            <p className="text-slate-700">Kira Whittle</p>
            <small className="text-zinc-400">Verified Graduate</small>
          </div>
        </div>
        <h2 className="text-slate-700 text-2xl mb-3 font-bold">
        Such a life-changing experience. Highly recommended!
        </h2>
        <blockquote className="text-zinc-400">
        “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
          professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
          student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
          did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
          project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
          could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
          experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
          100% recommend! ”
        </blockquote>
      </div>

      <div className="min-w-[375px] w-full h-auto flex flex-col p-8 bg-white rounded-[14px] md:px-12 shadow-2xl">
        <div className="relative flex items-center gap-4 mb-3">
          <img
            className="rounded-full border-2 w-10 h-10"
            src={avatar3} 
            alt="avatar-3" />
          <div className="flex flex-col">
            <p className="text-slate-700">Jeanette Harmon</p>
            <small className="text-zinc-400">Verified Graduate</small>
          </div>
        </div>
        <h2 className="text-slate-700 text-2xl mb-3 font-bold md:text-3xl">
        An overall wonderful and rewarding experience
        </h2>
        <blockquote className="text-zinc-500">
        “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
          while doing something I love. ”
        </blockquote>
      </div>

      <div className="min-w-[375px] w-full h-auto flex flex-col p-8 bg-slate-900 rounded-[14px] md:col-span-2 md:px-12">
        <div className="relative flex items-center gap-4 mb-3">
          <img
            className="rounded-full border-2 w-10 h-10"
            src={avatar4} 
            alt="avatar-4" />
          <div className="flex flex-col">
            <p className="text-white">Patrick Abrams</p>
            <small className="text-zinc-200">Verified Graduate</small>
          </div>
        </div>
        <h2 className="text-white text-2xl mb-3 font-bold">
          Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
          learning from their experiences was easy.
        </h2>
        <blockquote className="text-zinc-200">
        “ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
          gave me the confidence necessary to be able to go out in the world and present myself as a capable 
          junior developer. The standard is above the rest. You will get the personal attention you need from 
          an incredible community of smart and amazing people. ”
        </blockquote>
      </div>    
    </main>
  );
}

export default App;
