
import Head from 'next/head';
import VerifyPropertyForm from '../components/VerifyPropertyForm';

const VerifyPropertyPage = () => {
  return (
    <div>
      <Head>
        <title>Verify Property</title>
      </Head>
      <div className="container mt-5">
        <h1>Verify Property</h1>
        <VerifyPropertyForm />
      </div>
    </div>
  );
};

export default VerifyPropertyPage;
