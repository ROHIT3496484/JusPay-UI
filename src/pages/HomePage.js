import React, { useState, useEffect } from 'react';
import { 
  DollarSign, 
  Users, 
  ShoppingCart, 
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Globe,
  MapPin,
  Calendar,
  FileText
} from 'lucide-react';
import './HomePage.css';

const HomePage = () => {
  const [stats, setStats] = useState({
    customers: 0,
    orders: 0,
    revenue: 0,
    growth: 0
  });

  const [chartData, setChartData] = useState([]);
  const [revenueData, setRevenueData] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [revenueByLocation, setRevenueByLocation] = useState([]);
  const [salesBreakdown, setSalesBreakdown] = useState([]);

  useEffect(() => {
    // Load dashboard data
    const loadData = () => {
      setStats({
        customers: 3781,
        orders: 1219,
        revenue: 695,
        growth: 30.1
      });

      // Projections vs Actuals data
      setChartData([
        { month: 'Jan', projections: 25, actuals: 20 },
        { month: 'Feb', projections: 28, actuals: 22 },
        { month: 'Mar', projections: 30, actuals: 25 },
        { month: 'Apr', projections: 32, actuals: 28 },
        { month: 'May', projections: 35, actuals: 30 },
        { month: 'Jun', projections: 38, actuals: 32 }
      ]);

      // Revenue data
      setRevenueData([
        { month: 'Jan', current: 15, previous: 18 },
        { month: 'Feb', current: 18, previous: 20 },
        { month: 'Mar', current: 22, previous: 25 },
        { month: 'Apr', current: 25, previous: 28 },
        { month: 'May', current: 28, previous: 30 },
        { month: 'Jun', current: 32, previous: 35 }
      ]);

      // Top selling products - Updated to match screenshot
      setTopProducts([
        { name: 'ASOS Ridley High Waist', price: 79.49, quantity: 82, amount: 6518.18 },
        { name: 'Marco Lightweight Shirt', price: 128.50, quantity: 37, amount: 4754.50 },
        { name: 'Half Sleeve Shirt', price: 39.99, quantity: 64, amount: 2559.36 },
        { name: 'Lightweight Jacket', price: 20.00, quantity: 184, amount: 3680.00 },
        { name: 'Marco Shoes', price: 79.49, quantity: 64, amount: 1965.81 }
      ]);

      // Revenue by location - Updated to match screenshot
      setRevenueByLocation([
        { city: 'New York', revenue: 72, color: '#3b82f6' },
        { city: 'San Francisco', revenue: 39, color: '#8b5cf6' },
        { city: 'Sydney', revenue: 25, color: '#22c55e' },
        { city: 'Singapore', revenue: 61, color: '#f59e0b' }
      ]);

      // Sales breakdown - Updated to match screenshot
      setSalesBreakdown([
        { channel: 'Direct', amount: 300.56, percentage: 38.6, color: '#3b82f6' },
        { channel: 'Affiliate', amount: 135.18, percentage: 17.4, color: '#8b5cf6' },
        { channel: 'Sponsored', amount: 154.02, percentage: 19.8, color: '#22c55e' },
        { channel: 'E-mail', amount: 48.96, percentage: 6.3, color: '#f59e0b' }
      ]);
    };

    loadData();
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: amount % 1 !== 0 ? 2 : 0
    }).format(amount);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const statsData = [
    {
      title: 'Customers',
      value: formatNumber(stats.customers),
      change: '+11.01%',
      changeType: 'positive',
      icon: Users,
      color: '#22c55e',
      bgColor: '#f0fdf4'
    },
    {
      title: 'Orders',
      value: formatNumber(stats.orders),
      change: '-0.03%',
      changeType: 'negative',
      icon: ShoppingCart,
      color: '#ef4444',
      bgColor: '#fef2f2'
    },
    {
      title: 'Revenue',
      value: formatCurrency(stats.revenue),
      change: '+15.03%',
      changeType: 'positive',
      icon: DollarSign,
      color: '#22c55e',
      bgColor: '#f0fdf4'
    },
    {
      title: 'Growth',
      value: `${stats.growth}%`,
      change: '+6.08%',
      changeType: 'positive',
      icon: TrendingUp,
      color: '#22c55e',
      bgColor: '#f0fdf4'
    }
  ];

  return (
    <div className="home-page">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">eCommerce</h1>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        {statsData.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="stat-card">
              <div className="stat-header">
                <div 
                  className="stat-icon" 
                  style={{ 
                    backgroundColor: stat.bgColor, 
                    color: stat.color 
                  }}
                >
                  <Icon size={24} strokeWidth={2} />
                </div>
                <div className={`stat-change ${stat.changeType}`}>
                  {stat.changeType === 'positive' ? 
                    <ArrowUpRight size={16} strokeWidth={2} /> : 
                    <ArrowDownRight size={16} strokeWidth={2} />
                  }
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className="stat-content">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.title}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="charts-row">
        {/* Projections vs Actuals */}
        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">Projections vs Actuals</h3>
          </div>
          <div className="chart-container">
            <svg width="100%" height="200" viewBox="0 0 400 200" className="chart-svg">
              {/* Grid lines */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--border-primary)" strokeWidth="1" opacity="0.1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Y-axis labels */}
              <text x="10" y="20" fontSize="12" fill="var(--text-tertiary)">30M</text>
              <text x="10" y="60" fontSize="12" fill="var(--text-tertiary)">20M</text>
              <text x="10" y="100" fontSize="12" fill="var(--text-tertiary)">10M</text>
              <text x="10" y="140" fontSize="12" fill="var(--text-tertiary)">5M</text>
              <text x="10" y="180" fontSize="12" fill="var(--text-tertiary)">0</text>
              
              {/* Bars for projections */}
              {chartData.map((item, i) => {
                const x = 60 + (i * 60);
                const height = (item.projections / 30) * 160;
                const y = 200 - height;
                return (
                  <rect
                    key={`proj-${i}`}
                    x={x}
                    y={y}
                    width="20"
                    height={height}
                    fill="#e2e8f0"
                    opacity="0.6"
                    rx="2"
                  />
                );
              })}
              
              {/* Bars for actuals */}
              {chartData.map((item, i) => {
                const x = 60 + (i * 60) + 25;
                const height = (item.actuals / 30) * 160;
                const y = 200 - height;
                return (
                  <rect
                    key={`act-${i}`}
                    x={x}
                    y={y}
                    width="20"
                    height={height}
                    fill="#3b82f6"
                    rx="2"
                  />
                );
              })}
              
              {/* X-axis labels */}
              {chartData.map((item, i) => {
                const x = 60 + (i * 60) + 30;
                return (
                  <text key={i} x={x} y="195" fontSize="12" fill="var(--text-tertiary)" textAnchor="middle">
                    {item.month}
                  </text>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">Revenue</h3>
          </div>
          <div className="chart-container">
            <div className="revenue-info">
              <div className="revenue-current">
                <span className="revenue-label">Current Week</span>
                <span className="revenue-value">$58,211</span>
              </div>
              <div className="revenue-previous">
                <span className="revenue-label">Previous Week</span>
                <span className="revenue-value">$68,768</span>
              </div>
            </div>
            <svg width="100%" height="160" viewBox="0 0 400 160" className="chart-svg">
              {/* Grid lines */}
              <defs>
                <pattern id="revenue-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--border-primary)" strokeWidth="1" opacity="0.1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#revenue-grid)" />
              
              {/* Current week line */}
              <polyline
                points={revenueData.map((item, i) => `${60 + (i * 60)},${160 - (item.current / 35) * 140}`).join(' ')}
                fill="none"
                stroke="#0f172a"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Previous week line */}
              <polyline
                points={revenueData.map((item, i) => `${60 + (i * 60)},${160 - (item.previous / 35) * 140}`).join(' ')}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="5,5"
              />
              
              {/* X-axis labels */}
              {revenueData.map((item, i) => {
                const x = 60 + (i * 60);
                return (
                  <text key={i} x={x} y="155" fontSize="12" fill="var(--text-tertiary)" textAnchor="middle">
                    {item.month}
                  </text>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Revenue by Location */}
        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">Revenue by Location</h3>
          </div>
          <div className="location-container">
            <div className="location-map">
              <div className="map-placeholder">
                <Globe size={48} strokeWidth={1.5} />
              </div>
            </div>
            <div className="location-list">
              {revenueByLocation.map((location, index) => (
                <div key={index} className="location-item">
                  <div 
                    className="location-dot" 
                    style={{ backgroundColor: location.color }}
                  ></div>
                  <span className="location-name">{location.city}</span>
                  <span className="location-revenue">{location.revenue}K</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="bottom-row">
        {/* Top Selling Products */}
        <div className="table-card">
          <div className="table-header">
            <h3 className="table-title">Top Selling Products</h3>
          </div>
          <div className="table-container">
            <table className="products-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {topProducts.map((product, index) => (
                  <tr key={index}>
                    <td className="product-name">{product.name}</td>
                    <td className="product-price">{formatCurrency(product.price)}</td>
                    <td className="product-quantity">{product.quantity}</td>
                    <td className="product-amount">{formatCurrency(product.amount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Total Sales Donut Chart */}
        <div className="donut-card">
          <div className="donut-header">
            <h3 className="donut-title">Total Sales</h3>
          </div>
          <div className="donut-container">
            <div className="donut-chart">
              <svg width="200" height="200" viewBox="0 0 200 200" className="donut-svg">
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="16"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="16"
                  strokeDasharray={`${2 * Math.PI * 80 * 0.386} ${2 * Math.PI * 80}`}
                  strokeDashoffset="0"
                  transform="rotate(-90 100 100)"
                />
                <text x="100" y="105" textAnchor="middle" fontSize="24" fontWeight="600" fill="var(--text-primary)">
                  38.6%
                </text>
              </svg>
            </div>
            <div className="donut-legend">
              {salesBreakdown.map((item, index) => (
                <div key={index} className="legend-item">
                  <div 
                    className="legend-dot" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="legend-label">{item.channel}</span>
                  <span className="legend-value">{formatCurrency(item.amount)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;