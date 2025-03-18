/**@jsxImportSource @emotion/react */
import { getProductList } from '../../apis/productApi';
import * as s from './style';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


function ProductList() {
    const navigate = useNavigate();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
  
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [totalPages, setTotalPages] = useState(0);
    const [petType, setPetType] = useState(query.get('petType') || null);
  
    const pageNo = parseInt(query.get('pageNo') || '0', 10);
    const pageSize = parseInt(query.get('pageSize') || '12', 12);
    const sortBy = query.get('sortBy') || 'salesQuantity';
    const direction = query.get('direction') || 'desc';
    const categoryType = query.get('categoryType') || '';
    const search = query.get('search') || '';
  
    useEffect(() => {
      fetchProducts();
    }, [pageNo, pageSize, sortBy, direction, categoryType, petType, search]);
  
    const fetchProducts = async () => {
      setLoading(true);
      setError('');
  
      try {
        const params = {
          pageNo,
          pageSize,
          sortBy,
          direction,
          categoryType,
          petType,
          search,
        };
        const response = await getProductList(params);
  
        setProducts(response.data || []);
        setTotalPages(Number(response.message));
      } catch (err) {
        setError("상품을 불러오는 중 오류가 발생했습니다.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
  
    const updateQuery = (params) => {
      const newQuery = new URLSearchParams(location.search);
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== '') {
          newQuery.set(key, value);
        } else {
          newQuery.delete(key);
        }
      });
  
      navigate({ search: newQuery.toString() }, { replace: true });
    };
  
    const handlePetTypeClick = (type) => {
        setPetType(type);
        updateQuery({ petType: type ? type : '' });
    };
  
    const handlePrevPage = () => {
      updateQuery({ pageNo: Math.max(pageNo - 1, 0) });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    const handleNextPage = () => {
      updateQuery({ pageNo: Math.min(pageNo + 1, totalPages - 1) });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    const handleProductClick = (productId) => {
      navigate(`/product/${productId}`);
    };
  
    return (
      <div css={s.container}>
        <div css={s.petType}>
            <div onClick={() => handlePetTypeClick(null)} className={petType === null ? 'active' : ''}>전체</div>
            <div onClick={() => handlePetTypeClick('DOG')} className={petType === 'DOG' ? 'active' : ''}>강아지</div>
            <div onClick={() => handlePetTypeClick('CAT')} className={petType === 'CAT' ? 'active' : ''}>고양이</div>
        </div>
  
        {error && <p>{error}</p>}
        {loading ? (
          <p>로딩 중...</p>
        ) : (
          <>
            <div css={s.productsGrid}>
              {products.map(product => (
                <div key={product.productId} css={s.productItem} onClick={() => handleProductClick(product.productId)}>
                  <img src={product.imageUrl} alt={product.productName} />
                  <h3>{product.productName}</h3>
                  <p>가격: {product.price.toLocaleString()}원</p>
                </div>
              ))}
            </div>
  
            <div css={s.pagination}>
              <button onClick={handlePrevPage} disabled={pageNo === 0}>이전</button>
              <span> 페이지 {pageNo + 1} / {totalPages} </span>
              <button onClick={handleNextPage} disabled={pageNo + 1 >= totalPages}>다음</button>
            </div>
          </>
        )}
      </div>
    );
  }
  
  export default ProductList;