import { NextResponse } from "next/server";

const bookChapters: Record<string, number> = {
  GEN: 50, EXO: 40, LEV: 27, NUM: 36, DEU: 34, JOS: 24, JDG: 21, RUT: 4,
  "1SA": 31, "2SA": 24, "1KI": 22, "2KI": 25, "1CH": 29, "2CH": 36,
  EZR: 10, NEH: 13, EST: 10, JOB: 42, PSA: 150, PRO: 31, ECC: 12, SNG: 8,
  ISA: 66, JER: 52, LAM: 5, EZK: 48, DAN: 12, HOS: 14, JOL: 3, AMO: 9,
  OBA: 1, JON: 4, MIC: 7, NAM: 3, HAB: 3, ZEP: 3, HAG: 2, ZEC: 14, MAL: 4,
  MAT: 28, MRK: 16, LUK: 24, JHN: 21, ACT: 28, ROM: 16, "1CO": 16,
  "2CO": 13, GAL: 6, EPH: 6, PHP: 4, COL: 4, "1TH": 5, "2TH": 3,
  "1TI": 6, "2TI": 4, TIT: 3, PHM: 1, HEB: 13, JAS: 5, "1PE": 5,
  "2PE": 3, "1JN": 5, "2JN": 1, "3JN": 1, JUD: 1, REV: 22,
};

type RouteContext = {
  params: Promise<{ book: string; chapter: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { book, chapter: chapterText } = await context.params;
  const chapter = Number(chapterText);
  const chapterCount = bookChapters[book];

  if (
    chapterCount === undefined ||
    !Number.isInteger(chapter) ||
    chapter < 1 ||
    chapter > chapterCount
  ) {
    return NextResponse.json(
      { error: "Invalid book or chapter." },
      { status: 400 }
    );
  }

  try {
    const url = `https://bible.helloao.org/api/ENGWEBP/${book}/${chapter}.json`;
    const response = await fetch(url, {
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Bible source unavailable." },
        { status: 502 }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      translation: data.translation,
      book: data.book,
      chapter: data.chapter.number,
      content: data.chapter.content,
      footnotes: data.chapter.footnotes ?? [],
      numberOfVerses: data.numberOfVerses,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to retrieve this chapter. Please try again." },
      { status: 502 }
    );
  }
}
