import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";
import Link from 'next/link';

export default function Home() {

//  const detailData = typeof window !== 'undefined' && localStorage.getItem("abcddd") ? JSON.parse(localStorage.getItem("abcddd")) : [];

const [urls12, setUrls123] = useState([]);
  const [loader, setLoader] = useState(false)
  const reference = useRef();

  let newDate = new Date();
  let year = newDate.getFullYear();
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthAlphabet = monthName[newDate.getMonth()];
  const handleChange = (e) => {
    setLoader(true)
    try {
      const data = [];
      const urls = [];
      for (let x = 0; x < e.target.files.length; x++) {
        data.push(e.target.files[x]);
        const imageRef = ref(
          storage,
          `images/${monthAlphabet}_${year}/${data[x].name + v4()}`
        );
        uploadBytes(imageRef, data[x]).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            if (url) {
              urls.push(url);
              if (urls.length === e.target.files.length) {
                setUrls123(urls);
                setLoader(false)
              }
            }
          });
        });
        // dispatch(setLoading(false))
      }

    } catch (error) {
      setLoader(false)
      alert("Something went wrong")
    }

  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("abcddd", JSON.stringify(urls12))
    }
  }, [urls12])

  useEffect(()=>{
    setTimeout(()=>{
      const item = localStorage.getItem('abcddd')
    },1000)
  },[])

  console.log("urls12",urls12)

  return (
    <>
      <Head>
        <title>Image Uploader</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='yhgsdjgdf'>
          <div className='abvf'>
            <button className="button-5" role="button" onClick={() => reference.current.click()}>
              UPLOAD
            </button>
          </div>
          <div className='abvf'>
            <button className="button-5" role="button" onClick={() => setUrls123([])}>
              CLEAR ALL
            </button>
          </div>
        </div>
        <input onChange={handleChange} ref={reference} style={{ display: 'none' }} type="file" multiple />
        <div className='abcdd'>
          {urls12 &&
          urls12.length > 0 &&
            urls12.map((data) => {
              return (
                <div className='qqq'>
                  <Link href={data} target="_blank" className="color-[blue]">
                    {data}
                  </Link>
                </div>
              )
            })
          }
          {
            loader && <p className='textjjhg'>Uploading Please Wait ...</p>
          }
        </div>
      </main>
    </>
  )
}
