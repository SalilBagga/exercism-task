import React from 'react';

//svg
// import { ReactComponent as Arrow } from '../../assets/Arrow.svg';

//componenets
import TableRow from './TableRow';

export default function TableComponent({ testimonials }) {
  // const object = {
  //   testimonials: {
  //     results: [
  //       {
  //         id: 12120,
  //         track: {
  //           slug: 'rust',
  //           title: 'Rust',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/tracks/rust.svg',
  //         },
  //         exercise: {
  //           slug: 'anagram',
  //           title: 'Anagram',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/exercises/anagram.svg',
  //         },
  //         mentor: {
  //           handle: 'My-',
  //           avatar_url: 'https://avatars2.githubusercontent.com/u/10456471?v=4',
  //         },
  //         content: 'Got nice feedback.',
  //         created_at: '2020-08-14T10:37:34.000Z',
  //       },
  //       {
  //         id: 12130,
  //         track: {
  //           slug: 'rust',
  //           title: 'Rust',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/tracks/rust.svg',
  //         },
  //         exercise: {
  //           slug: 'gigasecond',
  //           title: 'Gigasecond',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/exercises/gigasecond.svg',
  //         },
  //         mentor: {
  //           handle: 'yvonmanzi',
  //           avatar_url: 'https://avatars3.githubusercontent.com/u/46822938?v=4',
  //         },
  //         content: 'I got fantastic and timely feedback from him. He was super helpful. ',
  //         created_at: '2020-08-18T08:07:29.000Z',
  //       },
  //       {
  //         id: 12136,
  //         track: {
  //           slug: 'rust',
  //           title: 'Rust',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/tracks/rust.svg',
  //         },
  //         exercise: {
  //           slug: 'gigasecond',
  //           title: 'Gigasecond',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/exercises/gigasecond.svg',
  //         },
  //         mentor: {
  //           handle: 'thegeek',
  //           avatar_url: 'https://avatars0.githubusercontent.com/u/524568',
  //         },
  //         content: 'Great advice ... very useful ... I like it',
  //         created_at: '2020-08-12T15:02:31.000Z',
  //       },
  //       {
  //         id: 12147,
  //         track: {
  //           slug: 'rust',
  //           title: 'Rust',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/tracks/rust.svg',
  //         },
  //         exercise: {
  //           slug: 'clock',
  //           title: 'Clock',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/exercises/clock.svg',
  //         },
  //         mentor: {
  //           handle: 'thegeek',
  //           avatar_url: 'https://avatars0.githubusercontent.com/u/524568',
  //         },
  //         content: 'Professional and full of advice ... Great guy !!!',
  //         created_at: '2020-08-14T16:07:36.000Z',
  //       },
  //       {
  //         id: 12154,
  //         track: {
  //           slug: 'rust',
  //           title: 'Rust',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/tracks/rust.svg',
  //         },
  //         exercise: {
  //           slug: 'anagram',
  //           title: 'Anagram',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/exercises/anagram.svg',
  //         },
  //         mentor: {
  //           handle: 'thermalCat',
  //           avatar_url: 'https://avatars1.githubusercontent.com/u/5403302?v=4',
  //         },
  //         content: 'Excellent feedback - clear & informative.',
  //         created_at: '2020-08-13T20:28:30.000Z',
  //       },
  //       {
  //         id: 12156,
  //         track: {
  //           slug: 'rust',
  //           title: 'Rust',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/tracks/rust.svg',
  //         },
  //         exercise: {
  //           slug: 'luhn',
  //           title: 'Luhn',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/exercises/luhn.svg',
  //         },
  //         mentor: {
  //           handle: 'elektronaut0815',
  //           avatar_url: 'https://dg8krxphbh767.cloudfront.net/placeholders/user-avatar.svg',
  //         },
  //         content:
  //           'A very good mentor who gives you a thorough review and helpful hints. I enjoyed the interaction a lot.',
  //         created_at: '2020-08-14T21:41:32.000Z',
  //       },
  //       {
  //         id: 12166,
  //         track: {
  //           slug: 'rust',
  //           title: 'Rust',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/tracks/rust.svg',
  //         },
  //         exercise: {
  //           slug: 'reverse-string',
  //           title: 'Reverse String',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/exercises/reverse-string.svg',
  //         },
  //         mentor: {
  //           handle: 'Dstri26',
  //           avatar_url: 'https://avatars3.githubusercontent.com/u/47537488?v=4',
  //         },
  //         content: 'That was great interacting with him.',
  //         created_at: '2020-08-16T15:38:53.000Z',
  //       },
  //       {
  //         id: 12169,
  //         track: {
  //           slug: 'rust',
  //           title: 'Rust',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/tracks/rust.svg',
  //         },
  //         exercise: {
  //           slug: 'anagram',
  //           title: 'Anagram',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/exercises/anagram.svg',
  //         },
  //         mentor: {
  //           handle: 'thegeek',
  //           avatar_url: 'https://avatars0.githubusercontent.com/u/524568',
  //         },
  //         content: 'Provides, as always, best support and knowledge ... keep going ...',
  //         created_at: '2020-08-15T10:15:59.000Z',
  //       },
  //       {
  //         id: 12180,
  //         track: {
  //           slug: 'rust',
  //           title: 'Rust',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/tracks/rust.svg',
  //         },
  //         exercise: {
  //           slug: 'space-age',
  //           title: 'Space Age',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/exercises/space-age.svg',
  //         },
  //         mentor: {
  //           handle: 'thegeek',
  //           avatar_url: 'https://avatars0.githubusercontent.com/u/524568',
  //         },
  //         content: 'Wonderful mentor ... as usual ... :D',
  //         created_at: '2020-08-17T20:43:37.000Z',
  //       },
  //       {
  //         id: 12183,
  //         track: {
  //           slug: 'rust',
  //           title: 'Rust',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/tracks/rust.svg',
  //         },
  //         exercise: {
  //           slug: 'luhn',
  //           title: 'Luhn',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/exercises/luhn.svg',
  //         },
  //         mentor: {
  //           handle: 'Bibobu',
  //           avatar_url: 'https://avatars2.githubusercontent.com/u/36191965?v=4',
  //         },
  //         content:
  //           'bobahop gives good insights concerning code refactoring both in readability and optimization, and takes time to give detailed answers, which is nice.',
  //         created_at: '2020-08-16T09:02:31.000Z',
  //       },
  //       {
  //         id: 12216,
  //         track: {
  //           slug: 'rust',
  //           title: 'Rust',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/tracks/rust.svg',
  //         },
  //         exercise: {
  //           slug: 'space-age',
  //           title: 'Space Age',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/exercises/space-age.svg',
  //         },
  //         mentor: {
  //           handle: 'My-',
  //           avatar_url: 'https://avatars2.githubusercontent.com/u/10456471?v=4',
  //         },
  //         content: 'Gave useful feedback.',
  //         created_at: '2020-08-25T20:41:52.000Z',
  //       },
  //       {
  //         id: 12219,
  //         track: {
  //           slug: 'rust',
  //           title: 'Rust',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/tracks/rust.svg',
  //         },
  //         exercise: {
  //           slug: 'simple-linked-list',
  //           title: 'Simple Linked List',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/exercises/simple-linked-list.svg',
  //         },
  //         mentor: {
  //           handle: 'richardfisk',
  //           avatar_url: 'https://dg8krxphbh767.cloudfront.net/placeholders/user-avatar.svg',
  //         },
  //         content: 'Helpful and encouraging. Thank you!',
  //         created_at: '2020-08-18T08:53:45.000Z',
  //       },
  //       {
  //         id: 12239,
  //         track: {
  //           slug: 'rust',
  //           title: 'Rust',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/tracks/rust.svg',
  //         },
  //         exercise: {
  //           slug: 'gigasecond',
  //           title: 'Gigasecond',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/exercises/gigasecond.svg',
  //         },
  //         mentor: {
  //           handle: 'Dstri26',
  //           avatar_url: 'https://avatars3.githubusercontent.com/u/47537488?v=4',
  //         },
  //         content: 'He helps in improving even small things which is great.',
  //         created_at: '2020-08-19T14:32:27.000Z',
  //       },
  //       {
  //         id: 12249,
  //         track: {
  //           slug: 'rust',
  //           title: 'Rust',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/tracks/rust.svg',
  //         },
  //         exercise: {
  //           slug: 'parallel-letter-frequency',
  //           title: 'Parallel Letter Frequency',
  //           icon_url:
  //             'https://dg8krxphbh767.cloudfront.net/exercises/parallel-letter-frequency.svg',
  //         },
  //         mentor: {
  //           handle: 'kruschk',
  //           avatar_url: 'https://dg8krxphbh767.cloudfront.net/placeholders/user-avatar.svg',
  //         },
  //         content:
  //           'I really enjoy our discussions; they always lead to an improved implementation (sometimes multiple!). Thanks!',
  //         created_at: '2020-08-19T22:49:27.000Z',
  //       },
  //       {
  //         id: 12253,
  //         track: {
  //           slug: 'rust',
  //           title: 'Rust',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/tracks/rust.svg',
  //         },
  //         exercise: {
  //           slug: 'sublist',
  //           title: 'Sublist',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/exercises/sublist.svg',
  //         },
  //         mentor: {
  //           handle: 'thegeek',
  //           avatar_url: 'https://avatars0.githubusercontent.com/u/524568',
  //         },
  //         content: 'No words ... Great Guy!!!!',
  //         created_at: '2020-08-20T09:28:49.000Z',
  //       },
  //       {
  //         id: 12301,
  //         track: {
  //           slug: 'rust',
  //           title: 'Rust',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/tracks/rust.svg',
  //         },
  //         exercise: {
  //           slug: 'gigasecond',
  //           title: 'Gigasecond',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/exercises/gigasecond.svg',
  //         },
  //         mentor: {
  //           handle: 'diodfr',
  //           avatar_url: 'https://avatars0.githubusercontent.com/u/1133053?v=4',
  //         },
  //         content: 'Clear, complete and benevolent review.',
  //         created_at: '2020-08-22T19:23:32.000Z',
  //       },
  //       {
  //         id: 12302,
  //         track: {
  //           slug: 'rust',
  //           title: 'Rust',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/tracks/rust.svg',
  //         },
  //         exercise: {
  //           slug: 'macros',
  //           title: 'Macros',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/exercises/macros.svg',
  //         },
  //         mentor: {
  //           handle: 'kruschk',
  //           avatar_url: 'https://dg8krxphbh767.cloudfront.net/placeholders/user-avatar.svg',
  //         },
  //         content:
  //           "Thanks for your help with Rust's macros; I found your example enlightening in several ways!",
  //         created_at: '2020-08-22T00:57:50.000Z',
  //       },
  //       {
  //         id: 12315,
  //         track: {
  //           slug: 'rust',
  //           title: 'Rust',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/tracks/rust.svg',
  //         },
  //         exercise: {
  //           slug: 'sublist',
  //           title: 'Sublist',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/exercises/sublist.svg',
  //         },
  //         mentor: {
  //           handle: 'richardfisk',
  //           avatar_url: 'https://dg8krxphbh767.cloudfront.net/placeholders/user-avatar.svg',
  //         },
  //         content: 'Bob gave some very useful feedback again.',
  //         created_at: '2020-08-24T03:06:53.000Z',
  //       },
  //       {
  //         id: 12323,
  //         track: {
  //           slug: 'rust',
  //           title: 'Rust',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/tracks/rust.svg',
  //         },
  //         exercise: {
  //           slug: 'clock',
  //           title: 'Clock',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/exercises/clock.svg',
  //         },
  //         mentor: {
  //           handle: 'Xuanwo',
  //           avatar_url: 'https://avatars2.githubusercontent.com/u/5351546?v=4',
  //         },
  //         content: 'Great review, help me write better rust code.',
  //         created_at: '2020-08-23T08:40:57.000Z',
  //       },
  //       {
  //         id: 12327,
  //         track: {
  //           slug: 'rust',
  //           title: 'Rust',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/tracks/rust.svg',
  //         },
  //         exercise: {
  //           slug: 'gigasecond',
  //           title: 'Gigasecond',
  //           icon_url: 'https://dg8krxphbh767.cloudfront.net/exercises/gigasecond.svg',
  //         },
  //         mentor: {
  //           handle: 'TimeoutError',
  //           avatar_url: 'https://avatars1.githubusercontent.com/u/65038406?v=4',
  //         },
  //         content:
  //           'A mentor with a keen eye for detail, clear and concise explanations, points out to potential alternative solutions to the problem, amazing!',
  //         created_at: '2020-08-22T21:48:29.000Z',
  //       },
  //     ],
  //     pagination: {
  //       current_page: 1,
  //       total_count: 1981,
  //       total_pages: 100,
  //     },
  //     tracks: [
  //       'rust',
  //       'fsharp',
  //       'csharp',
  //       'typescript',
  //       'javascript',
  //       'python',
  //       'java',
  //       'scala',
  //       'go',
  //       'c',
  //       'ruby',
  //       'php',
  //       'cpp',
  //     ],
  //     track_counts: {
  //       c: 47,
  //       cpp: 9,
  //       csharp: 99,
  //       fsharp: 59,
  //       go: 103,
  //       java: 51,
  //       javascript: 180,
  //       php: 8,
  //       python: 301,
  //       ruby: 49,
  //       rust: 913,
  //       scala: 24,
  //       typescript: 138,
  //     },
  //   },
  // };
  return (
    <div className="py-4 ">
      <table className="table-fixed w-full ">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {testimonials &&
            testimonials.map((data, index) => (
              <TableRow
                key={data.id}
                logo={data.track.icon_url}
                avatar={data.mentor.avatar_url}
                name={data.mentor.handle}
                topic={data.exercise.title}
                content={data.content}
                createdAt={data.created_at}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}
