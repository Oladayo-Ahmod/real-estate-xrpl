
import Head from 'next/head';
import AddPropertyForm from '../components/AddPropertyForm';

const AddPropertyPage = () => {
  return (
    <div>
      <Head>
        <title>Add Property</title>
      </Head>
      <div className="container mt-5">
        <h1>Add Property</h1>
        <AddPropertyForm />
      </div>
    </div>
  );
};

export default AddPropertyPage;
