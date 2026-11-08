"use client";

import { useState } from "react";
import Link from "next/link";
import { languages } from "@/config/languages";
import { bibleBooks } from "./books";

export default function BiblePage() {
  const [language, setLanguage] = useState("English");
  const [testament, setTestament] = useState("Old Testament");
  const [book, setBook] = useState("Genesis");
  const [chapter, setChapter] = useState(1);
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("");

  const availableBooks = bibleBooks.filter((item) => item.testament === testament);
  const selectedBook = bibleBooks.find((item) => item.name === book) ?? bibleBooks[0];

  return (
    <main style={{ minHeight: "100vh", background: "#8FAE8B", color: "#243B2A", padding: "32px 18px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Link href="/" style={{ color: "#243B2A", fontWeight: 700, textDecoration: "none" }}>← Back to Great Tent Cathedral</Link>
        <header style={{ textAlign: "center", padding: "42px 12px 30px" }}>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", margin: 0 }}>The Holy Bible</h1>
          <p style={{ fontSize: 17, marginTop: 12 }}>Search the Word. Discover the Truth. Grow in Faith.</p>
          <p style={{ fontSize: 14, marginTop: 8 }}>66 books · Old Testament · New Testament</p>
        </header>
        <section style={{ background: "#F7F6F0", borderRadius: 18, padding: 24, boxShadow: "0 8px 28px #243B2A18" }}>
          <label htmlFor="bible-language" style={{ display: "block", fontWeight: 700, marginBottom: 8 }}>Bible language</label>
          <select id="bible-language" value={language} onChange={(event) => setLanguage(event.target.value)} style={{ width: "100%", maxWidth: 420, padding: 12, borderRadius: 8, border: "1px solid #9BAF98", background: "white", color: "#243B2A" }}>
            {languages.map((item) => <option key={item.name} value={item.name}>{item.flag} {item.nativeName}</option>)}
          </select>
        </section>
        <section style={{ background: "#F7F6F0", borderRadius: 18, padding: 24, marginTop: 20 }}>
          <h2 style={{ marginTop: 0 }}>Browse the Bible</h2>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["Old Testament", "New Testament"].map((item) => (
              <button key={item} onClick={() => { setTestament(item); const first = bibleBooks.find((b) => b.testament === item); if (first) { setBook(first.name); setChapter(1); } }} style={{ padding: "12px 20px", borderRadius: 9, border: "1px solid #243B2A", background: testament === item ? "#243B2A" : "white", color: testament === item ? "white" : "#243B2A", fontWeight: 700, cursor: "pointer" }}>{item}</button>
            ))}
          </div>
          <p style={{ marginBottom: 8, fontWeight: 700 }}>Select a book</p>
          <select value={book} onChange={(event) => { setBook(event.target.value); setChapter(1); }} style={{ width: "100%", maxWidth: 420, padding: 12, borderRadius: 8, border: "1px solid #9BAF98", background: "white", color: "#243B2A" }}>
            {availableBooks.map((item) => <option key={item.name} value={item.name}>{item.name}</option>)}
          </select>
          <p>Chapter {chapter} of {selectedBook.chapters}</p>
          <button onClick={() => setChapter(Math.max(1, chapter - 1))}>Previous</button>
          <button onClick={() => setChapter(Math.min(selectedBook.chapters, chapter + 1))}>Next</button>
          <p>Selected: {book} {chapter} · {language}</p>
        </section>
      </div>
    </main>
  );
}
