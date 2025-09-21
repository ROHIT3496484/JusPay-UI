import React, { useState, useEffect } from 'react';
import { 
  Search, 
  MoreVertical, 
  Calendar,
  ArrowUpDown,
  RefreshCw,
  FileText,
  ArrowRight,
  Plus,
  Equal,
  List,
  Star,
  CreditCard,
  MapPin
} from 'lucide-react';
import './OrdersPage.css';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter] = useState('all');
  const [sortBy] = useState('date');
  const [sortOrder] = useState('desc');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOrders, setSelectedOrders] = useState([]);

  useEffect(() => {
    // Enhanced mock data for orders matching ByeWind style
    const mockOrders = [
      {
        id: 'CM9801',
        user: 'Natali Craig',
        project: 'Landing Page',
        address: 'Meadow Lane Oakland',
        date: 'Just now',
        status: 'in_progress',
        avatar: 'NC',
        hasDocument: false,
        hasCalendar: true
      },
      {
        id: 'CM9802',
        user: 'Kate Morrison',
        project: 'CRM Admin pages',
        address: 'Larry San Francisco',
        date: 'A minute ago',
        status: 'complete',
        avatar: 'KM',
        hasDocument: false,
        hasCalendar: true
      },
      {
        id: 'CM9803',
        user: 'Drew Cano',
        project: 'Client Project',
        address: 'Bagwell Avenue Ocala',
        date: '1 hour ago',
        status: 'pending',
        avatar: 'DC',
        hasDocument: false,
        hasCalendar: true
      },
      {
        id: 'CM9804',
        user: 'Orlando Diggs',
        project: 'Admin Dashboard',
        address: 'Washburn Baton Rouge',
        date: 'Yesterday',
        status: 'approved',
        avatar: 'OD',
        hasDocument: false,
        hasCalendar: true
      },
      {
        id: 'CM9805',
        user: 'Andi Lane',
        project: 'App Landing Page',
        address: 'Nest Lane Olivette',
        date: 'Feb 2, 2023',
        status: 'rejected',
        avatar: 'AL',
        hasDocument: true,
        hasCalendar: true
      },
      {
        id: 'CM9806',
        user: 'Natali Craig',
        project: 'Landing Page',
        address: 'Meadow Lane Oakland',
        date: 'Just now',
        status: 'in_progress',
        avatar: 'NC',
        hasDocument: false,
        hasCalendar: true
      },
      {
        id: 'CM9807',
        user: 'Kate Morrison',
        project: 'CRM Admin pages',
        address: 'Larry San Francisco',
        date: 'A minute ago',
        status: 'complete',
        avatar: 'KM',
        hasDocument: false,
        hasCalendar: true
      },
      {
        id: 'CM9808',
        user: 'Drew Cano',
        project: 'Client Project',
        address: 'Bagwell Avenue Ocala',
        date: '1 hour ago',
        status: 'pending',
        avatar: 'DC',
        hasDocument: false,
        hasCalendar: true
      },
      {
        id: 'CM9809',
        user: 'Orlando Diggs',
        project: 'Admin Dashboard',
        address: 'Washburn Baton Rouge',
        date: 'Yesterday',
        status: 'approved',
        avatar: 'OD',
        hasDocument: false,
        hasCalendar: true
      },
      {
        id: 'CM9810',
        user: 'Andi Lane',
        project: 'App Landing Page',
        address: 'Nest Lane Olivette',
        date: 'Feb 2, 2023',
        status: 'rejected',
        avatar: 'AL',
        hasDocument: true,
        hasCalendar: true
      }
    ];

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setOrders(mockOrders);
      setFilteredOrders(mockOrders);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = orders.filter(order => {
      const matchesSearch = order.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    });

    // Sort orders
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'date':
          aValue = new Date(a.date);
          bValue = new Date(b.date);
          break;
        case 'user':
          aValue = a.user.toLowerCase();
          bValue = b.user.toLowerCase();
          break;
        default:
          aValue = a[sortBy];
          bValue = b[sortBy];
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredOrders(filtered);
  }, [orders, searchTerm, statusFilter, sortBy, sortOrder]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'complete':
        return '#22c55e';
      case 'pending':
        return '#3b82f6';
      case 'in_progress':
        return '#3b82f6';
      case 'approved':
        return '#f59e0b';
      case 'rejected':
        return '#ef4444';
      default:
        return '#64748b';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'complete':
        return 'Complete';
      case 'pending':
        return 'Pending';
      case 'in_progress':
        return 'In Progress';
      case 'approved':
        return 'Approved';
      case 'rejected':
        return 'Rejected';
      default:
        return status;
    }
  };

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    setShowOrderModal(true);
  };

  const handleSelectOrder = (orderId) => {
    setSelectedOrders(prev => 
      prev.includes(orderId) 
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  };

  const handleSelectAll = () => {
    if (selectedOrders.length === filteredOrders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(filteredOrders.map(order => order.id));
    }
  };

  const isAllSelected = selectedOrders.length === filteredOrders.length && filteredOrders.length > 0;
  const isIndeterminate = selectedOrders.length > 0 && selectedOrders.length < filteredOrders.length;

  return (
    <div className="orders-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="header-left">
          <button className="icon-btn">
            <List size={20} strokeWidth={2} />
          </button>
          <button className="icon-btn">
            <Star size={20} strokeWidth={2} />
          </button>
          <h1 className="page-title">Order List</h1>
        </div>
      </div>

      {/* Action Bar */}
      <div className="action-bar">
        <div className="action-left">
          <button className="action-btn">
            <Plus size={20} strokeWidth={2} />
          </button>
          <button className="action-btn">
            <Equal size={20} strokeWidth={2} />
          </button>
          <button className="action-btn">
            <ArrowUpDown size={20} strokeWidth={2} />
          </button>
        </div>
        
        <div className="action-right">
          <div className="search-box">
            <Search size={20} strokeWidth={2} />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th className="checkbox-column">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  ref={input => {
                    if (input) input.indeterminate = isIndeterminate;
                  }}
                  onChange={handleSelectAll}
                  className="table-checkbox"
                />
              </th>
              <th>Order ID</th>
              <th>User</th>
              <th>Project</th>
              <th>Address</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="7" className="loading-row">
                  <div className="loading-spinner">
                    <RefreshCw size={24} className="animate-spin" strokeWidth={2} />
                    <span>Loading orders...</span>
                  </div>
                </td>
              </tr>
            ) : filteredOrders.length === 0 ? (
              <tr>
                <td colSpan="7" className="empty-row">
                  <div className="empty-state">
                    <div className="empty-icon">
                      <CreditCard size={48} strokeWidth={2} />
                    </div>
                    <h3>No orders found</h3>
                    <p>Try adjusting your search criteria</p>
                  </div>
                </td>
              </tr>
            ) : (
              filteredOrders.map((order) => (
                <tr key={order.id} className="order-row" onClick={() => handleOrderClick(order)}>
                  <td className="checkbox-column">
                    <input
                      type="checkbox"
                      checked={selectedOrders.includes(order.id)}
                      onChange={() => handleSelectOrder(order.id)}
                      className="table-checkbox"
                    />
                  </td>
                  <td>
                    <span className="order-id">{order.id}</span>
                  </td>
                  <td>
                    <div className="user-cell">
                      <div className="user-avatar">
                        <span>{order.avatar}</span>
                      </div>
                      <span className="user-name">{order.user}</span>
                    </div>
                  </td>
                  <td>
                    <span className="project-name">{order.project}</span>
                  </td>
                  <td>
                    <div className="address-cell">
                      <MapPin size={16} className="address-icon" strokeWidth={2} />
                      <span className="address-text">{order.address}</span>
                      {order.hasDocument && (
                        <FileText size={16} className="address-icon" strokeWidth={2} />
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="date-cell">
                      <Calendar size={16} className="date-icon" strokeWidth={2} />
                      <span className="date-text">{order.date}</span>
                    </div>
                  </td>
                  <td>
                    <div className="status-cell">
                      <div 
                        className="status-dot" 
                        style={{ backgroundColor: getStatusColor(order.status) }}
                      ></div>
                      <span 
                        className="status-text"
                        style={{ color: getStatusColor(order.status) }}
                      >
                        {getStatusText(order.status)}
                      </span>
                      <MoreVertical size={16} className="status-more" strokeWidth={2} />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button className="pagination-btn">
          <ArrowRight size={16} strokeWidth={2} style={{ transform: 'rotate(180deg)' }} />
        </button>
        <button className="pagination-number active">1</button>
        <button className="pagination-number">2</button>
        <button className="pagination-number">3</button>
        <button className="pagination-number">4</button>
        <button className="pagination-number">5</button>
        <button className="pagination-btn">
          <ArrowRight size={16} strokeWidth={2} />
        </button>
      </div>

      {/* Order Detail Modal */}
      {showOrderModal && selectedOrder && (
        <div className="modal-overlay" onClick={() => setShowOrderModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Order Details - {selectedOrder.id}</h2>
              <button 
                className="close-modal"
                onClick={() => setShowOrderModal(false)}
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="order-detail-section">
                <h3>Order Information</h3>
                <div className="detail-grid">
                  <div className="detail-item">
                    <span className="detail-label">Order ID:</span>
                    <span className="detail-value">{selectedOrder.id}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">User:</span>
                    <span className="detail-value">{selectedOrder.user}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Project:</span>
                    <span className="detail-value">{selectedOrder.project}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Address:</span>
                    <span className="detail-value">{selectedOrder.address}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Date:</span>
                    <span className="detail-value">{selectedOrder.date}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Status:</span>
                    <span className="detail-value" style={{ color: getStatusColor(selectedOrder.status) }}>
                      {getStatusText(selectedOrder.status)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;