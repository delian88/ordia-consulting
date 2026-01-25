
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

export const VideoIntro: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVoiceLoading, setIsVoiceLoading] = useState(false);
  const [currentCaption, setCurrentCaption] = useState("");
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const introScript = [
    { text: "Ordia Consulting Services, or O-C-S, is a premier financial services firm providing expert Outsourced C-P-A and business consulting solutions across the United States.", delay: 0 },
    { text: "Our team features a diverse group of certified professionals specializing in technical accounting, payroll, and management consulting.", delay: 8000 },
    { text: "With over twenty years of experience across government, non-profit, and for-profit sectors, we deliver tangible results that remediate internal control issues and enhance management visibility.", delay: 16000 },
    { text: "From specialized construction accounting and healthcare financial management to comprehensive tax preparation, O-C-S provides the technical excellence your business needs.", delay: 25000 },
    { text: "Partner with us for a three-hundred and sixty degree approach to your financial strategy. Your success is our mission.", delay: 34000 }
  ];

  const fullNarration = introScript.map(s => s.text).join(" ");

  useEffect(() => {
    let captionTimers: number[] = [];
    if (isPlaying && !isVoiceLoading) {
      introScript.forEach((item) => {
        const timer = window.setTimeout(() => {
          setCurrentCaption(item.text);
        }, item.delay);
        captionTimers.push(timer);
      });
    }
    return () => captionTimers.forEach(t => clearTimeout(t));
  }, [isPlaying, isVoiceLoading]);

  const startIntro = async () => {
    setIsPlaying(true);
    setIsVoiceLoading(true);

    try {
      // Initialize Audio Context on user gesture
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Say professionally and clearly: ${fullNarration}` }] }],
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
        const audioBuffer = await decodeAudioData(
          audioBytes,
          audioContextRef.current,
          24000,
          1
        );

        const source = audioContextRef.current.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContextRef.current.destination);
        
        if (audioSourceRef.current) {
          audioSourceRef.current.stop();
        }
        
        audioSourceRef.current = source;
        source.start();
        
        if (videoRef.current) {
          videoRef.current.play();
        }
      }
    } catch (error) {
      console.error("Voiceover failed:", error);
    } finally {
      setIsVoiceLoading(false);
    }
  };

  return (
    <section id="video-intro" className="py-24 bg-[#001a33] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] rounded-full -mr-32"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-400/5 blur-[100px] rounded-full -ml-24"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 reveal-left">
            <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block border-l-2 border-blue-500 pl-4">The Ordia Story</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              A Legacy of <br />
              <span className="italic font-normal text-blue-400">Technical Excellence.</span>
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">
              Discover how Ordia Consulting Services (OCS) provides personalized financial oversight that moves beyond compliance to proactive strategy. Watch our mission in motion.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
               <button 
                onClick={() => {
                  const contact = document.getElementById('contact');
                  contact?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-blue-900 transition-all shadow-xl active:scale-95"
               >
                 Book a Consultation
               </button>
            </div>
          </div>

          <div className="lg:col-span-7 reveal-right">
            <div className="relative group">
              {/* Video Container */}
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-slate-800">
                {!isPlaying ? (
                  <div className="absolute inset-0 z-10">
                    <img 
                      src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200" 
                      alt="Ordia Video Intro" 
                      className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        onClick={startIntro}
                        className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 hover:bg-white hover:text-blue-900 shadow-2xl group/play"
                      >
                        <svg className="w-8 h-8 md:w-10 md:h-10 ml-1 transition-transform group-hover/play:scale-110" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.333-5.89a1.5 1.5 0 000-2.538L6.3 2.841z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full bg-black">
                    {isVoiceLoading && (
                      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#001a33]/80 backdrop-blur-md">
                        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                        <span className="text-xs font-bold text-white uppercase tracking-widest animate-pulse">Initializing AI Narrator...</span>
                      </div>
                    )}
                    
                    {/* Caption Overlay */}
                    {!isVoiceLoading && currentCaption && (
                      <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center px-10 animate-fade-in">
                        <div className="bg-black/60 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-2xl text-center">
                          <p className="text-white text-sm md:text-base font-medium leading-