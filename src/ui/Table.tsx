import React from "react";

export function Table({ data }: { data: any }) {
  return (
    <table>
      <tbody>
        {Object.keys(data).map((key, index) => (
          <tr key={index} className="border-b h-16 text-sm">
            <td className="text-left text-[#768396] md:pr-10 whitespace-nowrap w-full">
              {key}
            </td>
            <td
              className="text-right md:pl-20 whitespace-nowrap"
              dangerouslySetInnerHTML={{ __html: data[key] }}
            ></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
