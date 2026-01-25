
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";

// Audio utility: Manual base64 decoding as per guidelines
function decodeBase64(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

// Audio utility: Decoding raw PCM data from Gemini TTS
async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

interface VideoIntroProps {
  onNavigate: (href: string) => void;
}

const introScript = [
  { 
    text: "In a world of financial volatility, one name stands as a beacon of precision. Ordia Consulting Services.", 
    delay: 0,
    video: "https://player.vimeo.com/external/371804246.hd.mp4?s=7b30f8c383f9827608e5a7b0365780a4a8d052d0&profile_id=174"
  },
  { 
    text: "OCS is a premier financial services firm providing expert Outsourced C-P-A and business consulting solutions across the United States.", 
    delay: 7500,
    video: "https://player.vimeo.com/external/370331493.hd.mp4?s=3324022830386121852bd770026e6c8f615e478e&profile_id=174"
  },
  { 
    text: "Our team features a diverse group of certified professionals specializing in technical accounting, payroll, and management consulting.", 
    delay: 15500,
    video: "https://player.vimeo.com/external/403814461.hd.mp4?s=3f4e2f9d863f684497a760d6248c894e4f9b800e&profile_id=174"
  },
  { 
    text: "With over twenty years of experience, we deliver tangible results that remediate complex internal control issues and redefine performance.", 
    delay: 24000,
    video: "https://player.vimeo.com/external/494254081.hd.mp4?s=548c775d165f1227092c47c7c10b7b1b3699b8f0&profile_id=174"
  },
  { 
    text: "From specialized construction accounting to healthcare financial management, O-C-S provides deep technical excellence where it matters most.", 
    delay: 33000,
    video: "https://player.vimeo.com/external/517090025.hd.mp4?s=8115682855f462a63756c32c2563f45c08d0e74e&profile_id=174"
  },
  { 
    text: "Witness the power of a three-hundred and sixty degree approach. This is the future of your financial strategy. Your success is our mission.", 
    delay: 42000,
    video: "https://player.vimeo.com/external/391060010.hd.mp4?s=4e4d4f8f3c7e0c4c5e3f4e8f3c7e0c4c5e3f4e8f&profile_id=174"
  }
];

export const VideoIntro: React.FC<VideoIntroProps> = ({ onNavigate }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVoiceLoading, setIsVoiceLoading] = useState(false);
  const [currentCaption, setCurrentCaption] = useState("");
  const [currentSceneIdx, setCurrentSceneIdx] = useState(0);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const fullNarration = introScript.map(s => s.text).join(" ");

  useEffect(() => {
    let timers: number[] = [];
    if (isPlaying && !isVoiceLoading) {
      introScript.forEach((item, index) => {
        const timer = window.setTimeout(() => {
          setCurrentCaption(item.text);
          setCurrentSceneIdx(index);
          // Auto-play the next video in sequence
          if (videoRefs.current[index]) {
            videoRefs.current[index]?.play();
          }
        }, item.delay);
        timers.push(timer);
      });
    }
    return () => timers.forEach(t => clearTimeout(t));
  }, [isPlaying, isVoiceLoading]);

  const startIntro = async () => {
    setIsPlaying(true);
    setIsVoiceLoading(true);

    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Say with dramatic authority and professional clarity: ${fullNarration}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      
      if (base64Audio && audioContextRef.current) {
        const audioBytes = decodeBase64(base64Audio);
        const audioBuffer = await decodeAudioData(audioBytes, audioContextRef.current, 24000, 1);

        const source = audioContextRef.current.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContextRef.current.destination);
        
        if (audioSourceRef.current) {
          audioSourceRef.current.stop();
        }
        
        audioSourceRef.current = source;
        source.start();
        
        // Initial video play
        if (videoRefs.current[0]) {
           videoRefs.current[0]?.play();
        }
      }
    } catch (error) {
      console.error("Voiceover failed:", error);
    } finally {
      setIsVoiceLoading(false);
    }
  };

  return (
    <section id="video-intro" className="py-24 bg-[#000d1a] relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[150px] rounded-full -mr-32"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 reveal-left">
            <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block border-l-2 border-blue-600 pl-4">The Ordia Legacy</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              Cinematic <br />
              <span className="italic font-normal text-blue-500">Advisory Vision.</span>
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">
              OCS provides unparalleled professional oversight through immersive technical strategy. Experience the mission that drives industries forward—from global boardrooms to complex construction sites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <button 
                onClick={() => onNavigate('#booking')}
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-blue-900 transition-all shadow-xl active:scale-95"
               >
                 Book Consultation
               </button>
            </div>
          </div>

          <div className="lg:col-span-7 reveal-right">
            <div className="relative group">
              {/* Scene Display stage */}
              <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 bg-black">
                
                {/* Intro Screen */}
                {!isPlaying && (
                  <div className="absolute inset-0 z-40 bg-slate-900 flex flex-col items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                      className="absolute inset-0 w-full h-full object-cover opacity-30" 
                      alt="Baltimore Skyline"
                    />
                    <button 
                        onClick={startIntro}
                        className="relative z-50 w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 hover:bg-white hover:text-blue-900 group/play"
                      >
                        <svg className="w-10 h-10 ml-1 transition-transform group-hover/play:scale-110" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.333-5.89a1.5 1.5 0 000-2.538L6.3 2.841z" />
                        </svg>
                    </button>
                    <p className="mt-6 text-[10px] font-bold text-blue-500 uppercase tracking-widest relative z-50">Play Cinematic Presentation</p>
                  </div>
                )}

                {/* Multi-Scene Montage Container */}
                {isPlaying && (
                  <div className="w-full h-full relative">
                    {introScript.map((scene, idx) => (
                      <div 
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${currentSceneIdx === idx ? 'opacity-100' : 'opacity-0'}`}
                      >
                        <video 
                          ref={el => videoRefs.current[idx] = el}
                          muted 
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                          src={scene.video}
                        />
                      </div>
                    ))}
                    
                    {/* Dark Cinematic Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>

                    {/* Captions Overlay */}
                    {!isVoiceLoading && currentCaption && (
                      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center px-8 animate-fade-in-up">
                        <div className="bg-blue-950/70 backdrop-blur-md border border-white/10 px-8 py-4 rounded-3xl text-center max-w-lg shadow-2xl">
                          <p className="text-white text-xs md:text-sm font-medium leading-relaxed tracking-wide">
                            {currentCaption}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Loading State Overlay */}
                {isVoiceLoading && (
                  <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-slate-900/90 backdrop-blur-xl">
                    <div className="w-12 h-12 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <span className="text-[10px] font-bold text-white uppercase tracking-[0.3em] animate-pulse">Orchestrating Narrative...</span>
                  </div>
                )}
              </div>

              {/* Cinematic Letterboxing Decor */}
              <div className="absolute -top-1 left-12 right-12 h-0.5 bg-blue-500/20 blur-sm"></div>
              <div className="absolute -bottom-1 left-12 right-12 h-0.5 bg-blue-500/20 blur-sm"></div>
            </div>
          </div>

        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 1s ease-out; }
        .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.2, 1, 0.3, 1) forwards; }
      `}</style>
    </section>
  );
};
