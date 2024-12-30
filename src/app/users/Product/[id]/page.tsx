
// Định nghĩa interface cho Product
interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    stock: number;
}

// Sử dụng async function để fetch dữ liệu trong Server Component
const ProductDetail = async ({ params }: { params: { id: string } }) => {
    const { id } = params;
    let product: Product | null = null;
    let error: string | null = null;

    try {
        // Gọi API từ backend NestJS
        const res = await fetch(`http://localhost:8080/product/${id}`);
        const data = await res.json();

        if (res.ok && data.success) {
            product = data.data;  // Trả về dữ liệu sản phẩm nếu thành công
        } else {
            error = data.message || 'Không thể lấy dữ liệu sản phẩm';
        }
    } catch (err) {
        error = `Lỗi kết nối với server: `;
    }

    // Xử lý lỗi và trường hợp không tìm thấy sản phẩm
    if (error) {
        return <div>{error}</div>;
    }

    if (!product) {
        return <div>Không tìm thấy sản phẩm.</div>;
    }

    return (
        <div className="product-detail">
            <h1>{product.name}</h1>
            <div className="product-info">
                <img src={product.imageUrl} alt={product.name} width="300" />
                <div>
                    <p><strong>Giá:</strong> {product.price} VND</p>
                    <p><strong>Mô tả:</strong> {product.description}</p>
                    <p><strong>Tồn kho:</strong> {product.stock}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;