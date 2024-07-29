import { useState, useEffect } from 'react'
import JobListing from './JobListing';
import Spinner from './Spinner';

function JobListings({ isHome = false }) {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    // const first3Jobs = isHome ? jobs.slice(0, 3) :jobs;
    // useEffect(() => { }, []); //default useEffect yapısı, array içerisindeki veri değiştiğinde otomatik statei günceller !!!!!!!!!!!!!!!!!!!!!!
    //use effecti async yapamayız!!!!!!!!!!!!! örnek:
    //useEffect(async() => { await fecth() }, []);    BU YASAK
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const apiUrl = !isHome ? '/api/jobs' : '/api/jobs?_limit=3'

                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data);
            } catch (error) {
                console.log("error fetching data!", error);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
                    {isHome ? 'Browse Jobs' : 'All Jobs'}
                </h2>
                {loading ? (<Spinner loading={loading} />) : (
                    <div className='grid grid-cols-4 md:grid-cols-3 gap-6'>
                        {
                            jobs.map((job) => (
                                <JobListing key={job.id} job={job} />
                            ))}
                    </div>

                )}

            </div>
        </section>
    )
}

export default JobListings