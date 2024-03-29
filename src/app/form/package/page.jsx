"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPackageType } from "@/redux/features/data/dataSlice";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const Package = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const packages = [
    {
      name: "India Post",
      logo: "https://indiashippingnews.com/wp-content/uploads/2023/05/india-post.jpg",
      price: "20 INR",
      deliveryTime: "48 hours",
    },
    {
      name: "Blue Dart",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Blue_Dart_logo_transparent.png",
      price: "40 INR",
      deliveryTime: "24 hours",
    },
    {
      name: "Porter",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEUERtv///8TT90ARNsAMdgAQtv///3u8fkANtkAP9oAOtoAONkyYt6zwPDH0/MAPdoSStrr7vvN2fWYqexyiOXx9fofVN3///vh6PlviuQAL9np7/j5+vuLoefW3/SpuO6InegAI9cvWN3Ay/MzXt9dfOJ+l+eptu2dsOlGa+Bef+PBzfKcr+tNb95lheW1xO92kecxZd2QnugkF20VAAAG1UlEQVR4nO2ci3baOBBAbWQrsg2ImBoHcExCAiUFQtj//7idkd+OkxqSPbvTndueNjZC0tVrxu45taw/GzH4t3vwT8OG9GFD+rAhfdiQPmxIHzakDxvShw3pw4b0YUP6sCF92JA+bEgfNqQPG9KHDenDhvRhQ/qwIX3YkD5sSB82pA8b0ocN6cOG9GFD+rAhfdiQPmxIHzakDxvShw3pw4b0YUP6sCF92JA+bEgfNqQPG9KHDenDhvRhQ/qwIX3YkD5sSB82pA8b0ocN6cOG9GHD/yqu6Fvymwzd/i1+A55jDQeO7le4r6FTogKvVYVW3ux5ppUWlabv1L7hu0VR5x2msqDzrvBKfAdqLypRm1RKubzXvUa1p6G+KxmvNl59+ILBQxglMonGW8svBX9GNwXL8e4lMI7uS3U3J/oFMsGpdT+Zw133WUYly/3DIMgHexfbhtTqo9jT0Jd2jeVcFR+4+gA3pPllJ/dBPlvBqPEFmQ5R3j3abeQruKhx+/YcxtAdQh0yrxpIpgqN9BZunh4ON9JOne81lDn402iR3dfrpWle5n+mE++dIXZSxkd9uWGjIFQyxla9WCZDRys/tOO593GXLzeUMlul2RK5NwvSGybZpYzyv28GojCM0xFyChPzCXzQYWjPOw3fCsPo5woZpeb21Lf0G3zHLAiRyLDHJF4wh4mlAkBvI+hvjIena0XY92Q39LR7HJn5vTP7Hw3l/QLLK6XusdTKt8TkPETO8LU4/xHbN4YPz8OSM46TMbx99ANTy/oOaow17HDbzvafs7eXwfcaDrJNFjwncLXV2IZZOxPcfcJT6xQX5EoVhtP84BGLKVwt4Uq4iOfhGFmeuRCF4TxwK/BuZljseG+CS+GXF6zsJFub6mTf+O2OftEwP7rUCNqCKXFfcGnunSIWuMqspZnbMrTcWVwNEIJTP6kOwsywHd+ahjhluDn0g20fTdFgaafK+i3XGMJpZttPylLQJkxN1VPYGugetA2FGf9ZVfAaQzOu976Y4U7wXW9xgH3QI+pfZYj7ahQIDxflj3oj/gPsxeidoXuGr0e14NVtKEq6DBd3eAJ5llpBtN+eN2M7jnos0qsMF6k51szJ2GxEDBI41mGy6obCc0K4Cp3P5/BtMisRbUPhLrYYF3GlOyEGoFhC0OgRLC6KhwNzCGjIKaCBZxd3hD1u7gTnzhwH+Vn6aDIwfUxldvdTwzguAm6caeVnqULc4Qi2snzCD0QQmvCTnHtlphfEw2S4Bs5v2F+5V5Y/NYu1UQ63JgYzE/GjW8MN9ic+1Yeiy7DGbVAa2reYxd1GWbDNwoTQsCbinoKXzGGeDZqkJoL+ZduxOYfFmdHM2mBeVqqeQ3YamvzMxNTaHNbqsNNZvgxcmMW41xK9zLDGHe4H/QY3W6mhgxN2dFuGyencLNa5SmXJssMwGf+qNrLwxz1n8BpDSD63pi33Gfs1q88NREiYB5GfNCmkW5E5jZTbrK7L8PWxetyySsNoOp2esJ3to1dvKWjV+D2GB2ht+tfrwM9DoA/pvX2oL9MFdgbDcJG1LTa49tLGEv3A8IN4CFmbk2KaeOw7aS0uyksD3/d1NZT+Djdnbbn4GxwIzOfKaKHwOJK7Vu5xWcR3Z0m+9a/hmnhYfleYQ2ddhER1xhM9aualKsSbm2b3L8xp9Gv8PjD15SuGkMLE+Oi3dQKtdfYIAQ982NPKUFiYpyeTxr7pMvyhqpcWntswhDwGn4LvezxJfLOhtdibMz4abefbUWJOo5U5NWs5jT5ikXDxO8PD64+KF7dhKHAr2tdtxa8ZWn772XWUhYV61qbwPUd8uCDimyeXRtbmDjAgR9e80fuioVAHWQWS2N7mHo3M2zFZUG0righm9VPDny1D2IrYzLjPi5mrDaWcdY2gGu6zdzTw+zQrDp3gBIG7fAKeRXCVrMt3ihZctwxlg8JQypsi0Dgr/GB6+Trt+zYxBTrmEHCd2dtoHI5X80kV2PU0DdNt0R29CcMw3RWXwhrD5aSqwt+FTdIHKCvW46enUfklfdo/Pe07R/k7DC0FmcZHlQuNL2OCRs4BR6uqxttTjUsLL+s1+KqFKSuw1qqQaeTyjUj13y36w4b0YUP6sCF92JA+bEgfNqQPG9KHDenDhvRhQ/qwIX3YkD5sSB82pA8b0ocN6cOG9GFD+rAhfdiQPmxIHzakDxvShw3pw4b0YUP6sCF92JA+bEgfNqQPG9KHDenDhvRhQ/qwIX3YkD5sSB82pA8b0ocN6cOG9GFD+rAhfdiQPmxIHzakz//CMPu/6j8p0vFTd6Hukp/U/+4j8fFHV/dqYA3+cNZ/A1++a452/0EpAAAAAElFTkSuQmCC",
      price: "150 INR",
      deliveryTime: "3 hours",
    },
    {
      name: "Gajanan",
      logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITDw8TEA8QEQ8PEBAQFhEVEBYYEhUVGBIXFhYXFRUYHCghGBsmGxYXLTUhJiksLi4uFyAzODMtNygtLi0BCgoKDg0OGxAQGy8lICUtLS4tLS0tMC0tLS0wLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBBAcCAwj/xABEEAACAgECBAIGBQkGBQUAAAABAgADEQQSBQYTITFRBxQiMkFhI3GBkdEVFkJSU5KTsdIzVFVklKEkNWJy8RdzgrPB/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAIFBv/EADURAAIBAgMFBQYGAwEAAAAAAAABAgMRBCExEkFRYaEFInHR4RMVYoGx8DJSkZLB8RTC0nL/2gAMAwEAAhEDEQA/AO4xEQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAxMbhOcelDi1yW1U12MlbV9RgpwWJYjBI747eHznP/WX/aP++34zbRwTqQUtq1+R5eI7TVKo4KN7cz9D5EZn559Zf9o/75/GPWH/AGj/AL5/GWe7n+boUe+Pg6+h+h8zGRPzx6y/7R/3z+MetP8AtH/fb8Y93P8AN09R74+Dr6H6HyJnM/O/rD/tH/fP4z0ursBBFtgI7gh2yPq7x7uf5unqPfHwdfQ/QwMzK/yTxF9RoarLTmzLoW89rlQT8+0sE8+UXFuL3HsU5qcFJbxERIOxERAEREAREQBERAEREAREQBERAEREASG5l46mjpFroz7nFYVcdyQT3J8BgGTBM0+I8PqvTp3VixMg4Pn5gjwMmLipLa0OKim4tQdnuOY8Z5o0OqsV79DczqgQEXbe2SfAfMmaP5Q4X/h9/wDqT+MsHM2h0ultRK+EnUBqw+8W3AA7iMdgfL/eRPrVP+An+Nf/AET1abi4rZUrf+rfyeBVU1Nqbi3v7jf+pq/lDhf+H3/6k/jH5Q4V/cL/APUmbXrVP+At/Hv/AKJpnjmiBIPB1BBwQdVZkH59pZa+il+5eZU5JauH7H/wfLivDqG0w1WlFiV9U0vVYQxVtu4FW+Ix5yBkrxbjHVRaq6a9Pp0c2CpMnLkY3M57scdpFTRSUlHvfaMtZxcu79vkIiJYVF25W5ut02lSpNC9yqznqBmAOWJxgIfD65YOEekWixwl9back4Dbt1Y/7mwCv3Y+c3fRp/y2r/vu/wDsMc78spqaHeutfWkAZWAwWA8UPnkeGfjPGnKi6soyjbPW/wBo+gpQxEaEZwnfL8LS+qzLQrg4I8DPco/o1431KfV37W6YYXPia84HY/FTgfdLuDMtSm6cnFno0Kyq01NbzMRE4LRERAEREAREQBERAEREAREQBERANLixs6F3RGbhW5Qdvf2nb4/PE5X6zxn/ADv8I/0zsMxiXUqyp37qd+JkxGF9s09tq3A5ANTxr/O/wz/THrPGv87/AAz/AEyS9J3Ebq9VStV9ta9ENhLGUZLsMnB7+AlP/Lmq/vWo/i2fjPTpxc4KWzHPkeJWlGlUcHOeXMnvWON/53+Gf6Z55tDnTaJtSANc3W6nYCwoGGwuF+OMePfx+c1OHJxO9d1L6x0/W6zhT9TMwB+yavE+A6ysG2+izBOWsPt9/NiCcfWZKjFTV3FNcNfA5lOTpuym0+Oa8SIiImwwiIiAWXgnOWo0tC01LUVUs2XRi3tHJ7hh5zfPpK1f6mn/AHG/rlY4dwq+8kUUu+PEqPZH1sewm5fytrUUs2ls2r442sfuUkzLKnh9rvWubadfFKPccrLhofA8ZuGqbU1kVXMxY7AQvfx9kk5B8jLVw70mWrgX0VuP1kJVvuOQfvEocSyeHpzyaKaeKq07uEtfvwP0PpdQtiI6HKWKrqfMEZH+0+8hOTP+X6T/ANv/APTJueBJWbR9ZTltRTe9IRESDsREQBERAEREAREQBERAEREAREQDmXpQ4bdZqaXrqd06WzKjPtB2JB8uxEieVOWne8vqdPZ0KEawoV/tCPdQeff4fKdiImNg8h901xxko09hL5nnT7OjOs6re+9rHJb9LxLW3bdltFX6NeSlKKBgDt4zNfCOKaK0CoWWV4HZCXqYeG1lbw7fKdZVAPAT1H+W9FFbPC32yF2atXN7XE5LzXyrY1lVuk0lirfXveoL/Zv8VwPD/wAyE/NXW/3O392d1idQx04xSsn+pFTsqlOTldrwt5HCvzV1v9zt/dm3wnk3VWX1pbRZVUze3YV8FAJP2nw+2dqiS8fUayS6+ZyuyaSd7vp5HLOMafiNlnR0umt02kUitEX2FIzjfYw8/wCU1X5Z4npGV6C7k9ya3LDcfHere99oInXYnEcXKKsoq318S2XZ0JPacpX3Ph4HLOYuX7dRRTqV0rpq3YpfUq43HvhwM/L/AH+Urv5q63+52/uzusTqGOnBWSXXzOKnZdObu2+n66ERyrp2r0WmSxSrrUAynxB8cGS8RMcndtnowioxUVuEREg6EREAREQBERAEREAREQBNPiOuSip7bTtrQZJ+3AA8yTjt85uSuc88Osv0NqVAlwUcKPFtrZIHzx/uJ1BJySelyurJxpycVdpEfw30gU23JX0LkFrbEcgEE5x3APb7My4bh8SJyfWc2XDT6emiqzT26bAdumpGAm3sGUlTNTjNX0uvOqTUNqy2amXPTFe74/8ARtI+X2za8Jdq3d6vXXqeVDtFxTu9p5btlLK9t+Z1B+MKNWmmNdu56zYLNv0eO/bdnx7fykpuHmPvnKESw6jSDT56w4WdoB7izpWY+o+H3iRmjpqD6DbXet/rKi8uDsL9QYx/1YzOVhLrJ7vPnyO/eMot3W/jbhlpnqdq3jzH3zG4eY++cX13DgaOIWkWb6dYoQZO0brGBOPPGO82uLoTqLzq01Du2nQ6ZkztB6Q7/Vnx/wDlmQsJfSXTw58zp9pNaw65atZ5csjr24eY++ZVgfA5nIOH8OFrcHrYOEdL1baSDjq2fH4dv9jLZ6MqilOpQ7tqaghQfgNo8JxVw2xFu+nLm1x5FmHxrqzUdmyfP4VLhzPfGOfaKbnqWqy41kh2XG1SPeAz44+Pwlk4br0upruTIS1QwBGD9059w7W2cN1GrS3Svb1n3I6j3hliO+O4OfsOe0+HMNfVuWzWae9KX0q9CtB2rs2jtjwHtZ+eNvaWSw0XZR043vf5fehRHHTjdyed7bNmrZ2TcrHVZjcJyrSnUUanhtuprvcJQ64Ckv71oUY/Wwydj3xIqjRu2m0wO5WOtdN3fcuUq7j5g/yhYP4sv78jp9p7tjPx5J8OfQ6u3GF9bGm6du419TqbPovq3eckgw8x2nM9Rw2yjW2U6Znd00DBGz7Rbae4+G7v9+JCcEqObdrPW3quoFtYrt9oip/7VmOAc48PLzkf40ZRunu8+eRLx04S2ZR3ta6aZX0fQ7QCPOZlI9GXDdumF5dy1wK7D7qhHb3frl4merBQm4p3sbsPVdWmptWv8xERKy4REQBERAEREAREQBERAMATMRAMRMxANGnhlK2vatSi2z3n/SPYD7PAeHlNzAnqIbvqRGKjojGIwIMieZNRZVo72pV7Ldm1Aqlm3MdoOB5Zz9klRu7ESlspye498L4zRqGtWl9zUna3YjHcjtnxHY9xJPE5ZwDhmr0uopL6ZhXqKXpbphmxkZDWY91slfLsDPPCuE6xBoXrGpW+yvWq+/ftQ4YVbgfcBJz38T3mqWGhd7Mlb0d/oedTx1TZW3B338s1b6nR9VxOuu6mlierfu2DaSDtGTk/Cb05dy5w+5dboWbTatShvF1lgYoXKn2lPwHh3+P2TqMqrUowaSd8v5NWFrzqqTkrZ5fovARMxKTSYxEzEAwJmIgCIiAIiIAiIgCIiAImIgGN4nqeNv8AOeoIRmJgmZgkw3gZX+b+OHSacOqB7bHFaKc43EE5OO5AA8PqlgxIfmbga6ujplijKwdHH6LAEeHlgmd09nbW3pvKa6n7OXs/xWyIzhfFdZX1H4jXVVQqdTqqfAkgBMAnJ7/+ZsafnbQuG23N7CNYforOyg4P6Mi9Ryvrbqbq9TrlcMqhFCeyGVgwZsAeRHx8flPgeU9Y73PdZpy1mjbTjZlQD2C5G3w7ePz8Jo2aTu5NX5ZL6MxKeJjZRi7fFm+jSVvmTbc7aEIH6/slguOm+7OAfDHwBGfKe/zw0XSa3r/RrZ0/cbJbGcKuMnt8RK9xjlo1afRGqqwarTn2rNPUr5bAyzKxXd3Ud5rcH5S1TUrbkU6mvVPci2rkMCF98D3TlfLz85PsqGztXevFffzI9vilLZ2VpwfnquBeuGcVq1FXVofqJ3HYYOQM4IPcH8ZW+XebzbXqb9UaqaK2VVUFjYpPwZfFs9sEfEHtJPlfgVmmqu6lim/UWPazIvsKxH6IPz+Ur35g2tXqGt1KnVW2LaGVSK8qWPfGO53HwHb5ziKo3km8srPfz/voWTnirQko553WSXK/kWL88dF0xYbiENnS71vkNjOGGMjsD3PbsZ9KObNG4sK3ZFVfVf6N+ydu/u9/EeErD8kXtUAfVhYdRVaxD2kMiq4O5rNxYkt/ObvH+TXe3do3roS6oUXJtwuwFTlAB44Udu3h8zJ2KGm16dPE5VbGWu4rdlbN66Z7na5uabmpG1NwNtI0tenW4PiwWYIQ5bIxj2/Ad/D542E500RqNguO0P08dN9xbGcKuMntIXV8is9moC2KlD6emqvuS4avpkFhjGMofA/GZ1fKertqo6l1Au0rEV7OoqFCqghmXDBvZHcfONmg7d7h9PD9eHMhVMWr93jz3+OXLjyJ9ua9IK6X6423ttTCsWJBAOVAyMZGcycEoScmXbNKFbT0tTa9rvX1C4zjAQsTuGAM5x4D5y+iVVFBfgd9fQ1YedaV/aK2nqZiJiVGkzExmZgCJiZgCIiAIiIAiIgGlr+JU07OrYqb9+3Oe+xC7Yx5KCfskeOatFtDDVVlTUt+RuI6bFlDnA7DKsO/hgz580cvHVmgi7pdD1j9Ddu6uner9YYxuz88Y+crfB/Rn6umrWvWHGr4b6jg1dksKYe1Rv8ABmy2zzY95ALUeadH7H04PUUuoCOSyg4LABc47jv854bm3Qh3Q6usPWbgwORg1KWsGSMEqASQO+JX+I8h2u2hevVoraPQpozuptw+NuXzVejL7vhkj65o6j0Ws1mosGtHU1NnEWO6gsirqq9o2IbMK6En2xgsDgwC6rzFpCruNTWUrpr1DNnsK3yEb6jg/dMX8yaVBUW1CgXqr1kBiHDAkbSB37A9vGUmv0VsvVWvXtXTcdFvQUgsBQS5FZZiAGtO7BUgeHeS/D+SHrq4fU2sNi8O1tmpQmrDNWwcLWcNgEbz7QGPkJIJ2/mbSICX1NagWvSck56iKGdQuMkgHJ8hMPzTohuzq6fYSmw4bPsWsFrYY8QxZe48xK03o+tW576dcqag6zX6hS2m31ivVVojVsnUBJXYCGBH1SN1HohQhdmtdTWmjrRulk7ac9RXw43BztOO20ovjITDL1bzJpFfVI2prD6JBZeuTmtSMgt28j8JvX6+pKTc9ipSqdQ2McKFxnJJ+E53b6LrmbUv+Uj1NYmtS7OmGwi9gw2AOGG0qvvFvd7Ylh1HK11/DL9DrNWtnUVUS2qjp7FUKUypdtx3Lk9xkHEbgbx5x0HT6nrlWzqdL47t+3dt2Y3Z29/Dw7z1ZzZoQjudXVsrrpuZgSVCWttrbIHcMe3aQWr5N1dj6e9+IqdbprLWrf1MChUspFTp0g+ScDO4ue/yka/opxUtFWtK0PRpqLw1G57BTqDeGrbeOmSxI7hsCEC1Nzpw/fYh1lYerr7gQwx0QTaASMMVAOQMz1Xzfoms6a6kNZtrbC12HAsQOhYhcKCpB7yo2+is9TUWLrQG1H5TDBqCyqurXA2A2YR1ycsPeHbtPtw/0cWU6k3JrayHr0lbK1F2cUadaSV2ahVO4An2lbGR4/GSC3cG5n0eqYrptSlrhBZtAYHYTgMAwGVz8RPep5i0tdFN73qKb2VK3wx3sQSAoAySdp+Hwlc5H5CPD7t66kXK2kr07Bqzu3o5bdW5c7EIPesds95i3kt7+HcL019gqbQ6inUWBdx3hA4KK6spXIf3h4YkNgnfzt0XUWs6pFsY1AKwZTmz+zByPZLfAGeBznoCllnrS9KoZazY+wfSCv3tuD7TAYEr3EPRsH1p1VeqKFbdA9dTI1iBdMhUrbuf6Xd2IY+0pHY9zI9PRXaNHqNL6/XsuHZ+hduU+tJf3U6gpj2SOyg9/HxyuSXW3mzQra9R1dXVr6m5cnsUQu65AxuCgkrnPynm/nDQooZtUoU0V6nOxz9FZnY5wvZTg/dKzd6N7DZbs4gyad7dZetXSbeH1FZVldhYFsQMcgFc9sZjhvoxWirUpXqMetcKHD2PTY/SYIa72rD2OfcGAPOEC1nmfSDSnVG8DShlXqlHAyxAXAK5OSw74+M+F/OmgQVmzV119QFlDhlO0Ps3MGAKLu7bmwJrcZ5TOo4TVoDft6aaRDbsPfoshPshgRnZ59syM476POq7nT6k0VX6QaK5HrN7NULTZmux33K/cjJ3DuO3aSCau524ej2I+rRXpNquCr4BrXc4ztwSFGcD4TYo5q0b2CtNTW1hsFQUZzvNZsA8P1AT9kqNfotUahrvWiQ9+qdqmqLIarqBVsAL4FijP0gAJzgjAmnwz0RGgo9evPXXS6ik2Gk4NtnUVbsdT3lrsKgZ/RBz8JALuvN2hNK3DVVtS9x06uu4hrQM7AAMk4E8fnpw/wCj/wCNp+lVXU5O3a1hrBLYwvtqR3x3GJUNP6JtipUNfY2mXUabU7DXts3V0vS22ytl2kqy98ZGweM8/wDpVb01qPEKxUdHXobdujw71LqjflT1cK5yAWIPxPiZILqebdF9N/xK405tFjbH2oa/fBbbjIx5zb4TxvT6kOdPctnTIVwMhlJGRuVgCMiUcejW0DXoutr6eubVt3pu3p1iSB/b9M4OO+zJ79xLDydyp6g2qC3dWvUPXYoZD1VK1hGDWliXXt2B90du8gFpiIkgREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREA//2Q==",
      price: "30 INR",
      deliveryTime: "36 hours",
    },
  ];

  const handleSelectPackage = (value) => {
    // console.log("Selected package:", value);
    dispatch(setPackageType(value));
    router.push("/cart");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center text-white mx-24">
      <h1 className="text-4xl font-semibold mb-8 capitalize">
        Choose a Package
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 flex flex-col items-center"
          >
            <img
              src={pkg.logo}
              alt={`${pkg.name} Logo`}
              className="h-16 mb-4"
            />
            <div className="text-lg font-semibold mb-2">{pkg.name}</div>
            <div className="text-base mb-2">{pkg.price}</div>
            <div className="text-sm mb-4">{pkg.deliveryTime}</div>
            <Button
              text="Select Package"
              handler={() => handleSelectPackage(pkg)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Package;
