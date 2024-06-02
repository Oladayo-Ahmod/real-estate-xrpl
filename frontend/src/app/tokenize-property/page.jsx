
import Head from 'next/head';
import TokenizePropertyForm from '../components/TokenizePropertyForm';

const TokenizePropertyPage = () => {
  return (
    <div>
      <Head>
        <title>Tokenize Property</title>
      </Head>
      <div className="container mt-5">
        <h1>Tokenize Property</h1>
        <TokenizePropertyForm />
      </div>
    </div>
  );
};

export default TokenizePropertyPage;
