import dayjs from 'dayjs';
import Link from 'next/link';
import { randomImage } from '@/utils';
// import Pagination from '@/components/Pagination';
import { Article } from '@/types/app/article';
import "./index.scss"

import { RiFireLine } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { GoTag } from "react-icons/go";
import Empty from '@/components/Empty';
import Show from '@/components/Show';

interface ClassicsProps {
    data: Paginate<Article[]>;
}

const Classics = ({ data }: ClassicsProps) => {
    // const [paginate, setPaginate] = useState<Page>({ page: data.page, size: data.size });

    // useEffect(() => {
    //     if (data) onGet({ page: paginate.page, size: paginate.size });
    // }, [paginate, data, onGet]);

    return (
        <div className='ClassicsComponent'>
            <div className="classics">
                {data?.result.map((item, index) => (
                    <div className="item" key={item.id}>
                        {index % 2 === 0 && (
                            <div
                                className="cover"
                                style={{ backgroundImage: `url(${item.cover || randomImage()})` }}
                            />
                        )}

                        <div className="info">
                            <Link href={`/article/${item.id}`} className='link'>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>

                                <div className={`fun ${index % 2 === 0 ? 'end' : 'start'}`}>
                                    <div className='fun_item'>
                                        <span><IoTimeOutline /></span>
                                        <span>{dayjs(+item.createTime!).format('YYYY-MM-DD')}</span>
                                    </div>

                                    <div className='fun_item'>
                                        <span><RiFireLine /></span>
                                        <span>{item.view}</span>
                                    </div>

                                    <div className='fun_item'>
                                        <span><GoTag /></span>
                                        <span>{item.cateList[0]?.name}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div
                            className="bg"
                            style={{ backgroundImage: `url(${item.cover || randomImage()})` }}
                        />

                        {index % 2 !== 0 && (
                            <div
                                className="cover"
                                style={{
                                    clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)',
                                    backgroundImage: `url(${item.cover || randomImage()})`,
                                }}
                            />
                        )}
                    </div>
                ))}

                <Show is={!data.total} children={<Empty info="暂无文章" />}></Show>

                {/* {data.total >= 5 && (
                <Pagination
                    paginate={paginate}
                    onChange={(newPaginate) => setPaginate(newPaginate)}
                />
            )} */}
            </div>
        </div>
    );
};

export default Classics;