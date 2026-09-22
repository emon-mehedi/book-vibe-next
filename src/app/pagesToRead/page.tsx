'use client'
import { BooksContext } from '@/contexts/BooksContext';
import { IBook } from '@/types/AllTypes';
import { useContext } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  BarShapeProps,
  LabelList,
  Label,
  LabelProps,
  Tooltip,
} from 'recharts';


export default function CustomShapeBarChart() {
  const { readList } = useContext(BooksContext);

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'black'];

  // #region Sample data
  const data = readList.map((book: IBook) => {
    return {
      name: book.bookName,
      pages: book.totalPages,
      pv: 2400,
      amt: 2400,
    }
  })

  // #endregion
  const getPath = (x: number, y: number, width: number, height: number) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
  };

  const TriangleBar = (props: BarShapeProps) => {
    const { x, y, width, height, index } = props;

    const color = colors[index % colors.length];

    return (
      <path
        strokeWidth={props.isActive ? 5 : 0}
        d={getPath(Number(x), Number(y), Number(width), Number(height))}
        stroke={color}
        fill={color}
        style={{
          transition: 'stroke-width 0.3s ease-out',
        }}
      />
    );
  };

  const CustomColorLabel = (props: LabelProps) => {
    const fill = colors[(props.index ?? 0) % colors.length];
    return <Label {...props} fill={fill} />;
  };

  if (readList.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <h2 className="text-4xl text-center">No books found</h2>
      </div>
    )
  } else {
    return (
      <div className='flex items-center justify-center'>
        <BarChart
          style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
          responsive
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid />
          <Tooltip cursor={{ fillOpacity: 0.5 }} />
          <XAxis dataKey="name" />
          <YAxis width="auto" />
          <Bar dataKey="pages" shape={TriangleBar} activeBar>
            <LabelList content={CustomColorLabel} position="top" />
          </Bar>
          {/* <RechartsDevtools /> */}
        </BarChart>
      </div>
    );
  }
}