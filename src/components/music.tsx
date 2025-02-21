"use client";

import useSWR from "swr";
import { SiLastdotfm } from "react-icons/si";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { motion } from "framer-motion";

export function Music() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/music", fetcher);

  if (!data?.isPlaying) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      className="fixed bottom-3 right-0 flex flex-col pb-3 px-3 align-middle text-white dark:text-black"
    >
      <div className="fixed bottom-3 right-0 flex flex-col pb-3 px-3 align-middle text-white dark:text-black">
        <div className="rounded-xl border border-[#333b37] dark:border-gray-300 pb-3 px-3 shadow-xl bg-neutral-800 dark:bg-white">
          <div className="">
            <p>Currently Listening to:</p>
          </div>
          <Tilt glareEnable glareBorderRadius="16px" className="rounded-2xl">
            <Link
              target="_blank"
              rel="noopener noreferer"
              href={data.songUrl || "https://www.last.fm/user/armhs"}
              className="relative flex w-72 items-center space-x-4 rounded-2xl px-5 transition-shadow hover:shadow-2xl"
            >
              <div className="w-16">
                <Image
                  src={data.albumImageUrl}
                  alt={data.albumName}
                  className="rounded-xl"
                  width={64}
                  height={64}
                />
              </div>

              <div className="pb-9">
                <p className="font-bold text-white dark:text-black">
                  {data.title}
                </p>
                <p className="font-dark text-xs text-white dark:text-black -my-5">
                  {data.artistName}
                </p>
              </div>
              <div className="absolute bottom-4 right-4">
                <SiLastdotfm size={20} className="text-white dark:text-black" />
              </div>
            </Link>
          </Tilt>
        </div>
      </div>
    </motion.div>
  );
}

export function LastPlayed() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/music/lastplayed", fetcher);

  return (
    <div className="pt-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        className="w-[26rem] flex flex-col px-3 align-middle text-white dark:text-black"
      >
        <div className="flex flex-col px-3 text-white dark:text-black">
          <div className="rounded-xl border border-[#333b37] dark:border-gray-300 px-3 pb-3 shadow-xl bg-neutral-800 dark:bg-white">
            <div className="pl-1">
              <p>
                Last Played on <SiLastdotfm className="inline" />
              </p>
            </div>
            <Tilt glareEnable glareBorderRadius="16px" className="rounded-2xl w-[20rem] border hover:border-none border-[#323936]">
              <Link
                target="_blank"
                rel="noopener noreferer"
                href={data?.songUrl || "https://www.last.fm/user/armhs"}
                className="relative flex w-[20rem] items-center space-x-4 rounded-2xl px-5 transition-shadow hover:shadow-2xl"
              >
                <div className="w-16">
                  <Image
                    src={data?.albumImageUrl}
                    alt={data?.albumName}
                    className="rounded-xl"
                    width={64}
                    height={64}
                  />
                </div>

                <div className="pb-9">
                  <p className="font-bold text-white dark:text-black">
                    {data?.title}
                  </p>
                  <p className="font-dark text-xs text-white dark:text-black -my-5">
                    {data?.artistName}
                  </p>
                </div>
                <div className="absolute bottom-4 right-4">
                  <SiLastdotfm
                    size={20}
                    className="text-white dark:text-black"
                  />
                </div>
              </Link>
            </Tilt>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
