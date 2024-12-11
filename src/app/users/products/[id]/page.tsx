// Định nghĩa interface cho Product
interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    stock: number;
}

// Sử dụng async function trong Server Component để fetch dữ liệu
const ProductDetail = async ({ params }: { params: { id: string } }) => {
    const { id } = params;

    // Fetch dữ liệu sản phẩm từ backend NestJS
    const product = await fetchProduct(id);

    // Xử lý trường hợp không tìm thấy sản phẩm
    if (!product) {
        return <div>Không tìm thấy sản phẩm hoặc lỗi khi lấy dữ liệu.</div>;
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

// Hàm fetch để lấy dữ liệu sản phẩm từ API
const fetchProduct = async (id: string) => {
    try {
        console.log(`Fetching product with ID: ${id}`);  // Log ID đang được fetch

        const res = await fetch(`http://localhost:8080/product/${id}`, { cache: 'no-store' });

        // Kiểm tra nếu không phải mã phản hồi OK (200-299)
        if (!res.ok) {
            throw new Error(`Server trả về lỗi: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        console.log(data);  // Log dữ liệu trả về từ API

        // Kiểm tra xem có dữ liệu sản phẩm không
        if (data && data.id) {
            return data;  // Trả về dữ liệu sản phẩm nếu có
        } else {
            throw new Error(data.message || 'Không thể lấy dữ liệu sản phẩm');
        }
    } catch (err: any) {
        console.error('Error fetching product:', err);  // Log lỗi
        return null; // Trả về null nếu có lỗi
    }
};

export default ProductDetail;
