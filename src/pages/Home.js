import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
  const features = [
    {
      title: 'Interactive Visualizations',
      description: 'Explore linear algebra concepts through interactive, animated visualizations that bring abstract ideas to life.',
      icon: '📊'
    },
    {
      title: 'Machine Learning Applications',
      description: 'See how linear algebra powers machine learning algorithms like PCA, SVD, and linear regression.',
      icon: '🤖'
    },
    {
      title: 'Intuitive Learning',
      description: 'Build intuition through visual examples rather than just memorizing formulas and theorems.',
      icon: '💡'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-dark to-bg-medium animate-matrix-flow"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Lin<span className="text-accent-blue">Oasis</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray mb-10 max-w-3xl mx-auto">
            Visualize linear algebra concepts and their applications in machine learning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="primary">
              Get Started
            </Button>
            <Button size="lg" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-accent-blue mb-16">
            Why LinOasis?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} variant="elevated" hoverable>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-medium">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Intuition?
          </h2>
          <p className="text-xl text-gray mb-10 max-w-2xl mx-auto">
            Explore the beauty of linear algebra through interactive visualizations
          </p>
          <Button size="lg" variant="primary">
            Start Exploring
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
