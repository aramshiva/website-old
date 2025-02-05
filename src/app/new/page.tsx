import Link from 'next/link';

export default function Page() {
    return (
        <>
            <p>hi there! i{"'"}m ~aram [he/him]</p>
            <p>a student developer based in seattle, wa.</p>
            <p>i love creating cool experiences and technology that you <em>enjoy</em> using.</p>
            <p>when i{"'"}m not coding, i love <Link href="/photos">photography</Link>, listening to <Link href="/music">music</Link>, gaming, playing the piano or studying history.</p>
            <p>i love meeting new people! feel free to email me at me [at] my name [dot] sh!</p>
            <p>if you want to hire me ;) check out my <Link href="https://cv.aram.sh">cv</Link> or what i{"'"}ve <Link href="/work">done</Link>!</p>
            <p>anyways! got to go now but before you leave, make sure to sign my <Link href="/guestbook">guestbook</Link>, i{"'"}d love to hear from you!</p>
            <p>-aram</p>
            <h6>building directory:</h6>
            <p>
                <Link href="/work">work</Link> | <Link href="/photos">photos</Link> | <Link href="/guestbook">guestbook</Link> | <Link href="/music">music</Link> | <Link href="https://cv.aram.sh">cv</Link> | <Link href="https://github.com/aramshiva/website">git</Link>
            </p>
        </>
    )
}