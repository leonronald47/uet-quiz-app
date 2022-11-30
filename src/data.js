const questions = [
  {
    questionText: "Phân tích chương trình tĩnh thuộc loại nào?",
    correctAnswer: "Phân tích thời gian được biên dịch.",
    wrong1: "Phân tích thời gian chạy.",
    wrong2: "Phân tích thời gian chạy và thời gian được biên dịch.",
    wrong3: "Phân tích luồng dữ liệu.",
  },
  {
    questionText:
      "Đâu không phải là tính năng mong muốn đạt được của một phân tích chương trình?",
    correctAnswer: "Tính sẵn sàng (availability)",
    wrong1: "Tính kết thúc (termination)",
    wrong2: "Tính chắc chắn (soundness)",
    wrong3: "Tính đầy đủ (completeness)",
  },
  {
    questionText: "Đâu không phải là ưu điểm của phân tích mã tĩnh?",
    correctAnswer: "Một số lỗ hổng bảo mật.",
    wrong1: "Nó cho phép bạn xác định chính xác lỗi tiềm ẩn trong mã nguồn.",
    wrong2:
      "Nó cho phép các điểm yếu được tìm thấy sớm hơn trong vòng đời phát triển, giảm chi phí trong việc gỡ lỗi.",
    wrong3:
      "Dễ sử dụng. Bạn không cần chuẩn bị bất kỳ bộ dữ liệu đầu vào nào để kiểm tra.",
  },
  {
    questionText:
      "Phân tích chương trình được chia thành mấy loại và gồm loại nào?",
    correctAnswer:
      "3 loại gồm phân tích động, phân tích tĩnh, phân tích hỗn hợp",
    wrong1: "2 loại gồm phân tích tĩnh, phân tích động",
    wrong2: "2 loại gồm phân tích động, phân tích hỗn hợp",
    wrong3: "Không chia thành loại nào",
  },
  {
    questionText: "Nhận định nào đúng?",
    correctAnswer: "Phân tích tĩnh có thể tìm ra các lỗi giả.",
    wrong1: "Phân tích động có thể tìm ra các lỗi giả",
    wrong2:
      "Thời gian thực hiện phân tích tĩnh tỷ lệ thuận với thời gian thực thi chương trình",
    wrong3:
      "Thời gian thực hiện phân tích động tỷ lệ thuận với kích cỡ chương trình",
  },
  {
    questionText: "Kỹ thuật nào sau đây KHÔNG phải là kỹ thuật hộp đen?",
    correctAnswer: "LCSAJ (Linear Code Sequence and Jump)",
    wrong1: "Kiểm tra cú pháp",
    wrong2: "Kiểm tra chuyển đổi trạng thái",
    wrong3: "Phân tích giá trị ranh giới",
  },
  {
    questionText: "Loại kiểm thử nào cần đến phân tích chương trình?",
    correctAnswer: "Kiểm thử hộp trắng tự động",
    wrong1: "Kiểm thử hộp trắng bằng tay",
    wrong2: "Kiểm thử hộp đen bằng tay",
    wrong3: "Kiểm thử hộp đen tự động",
  },
  {
    questionText: "Ưu điểm của kiểm thử tự động là gì?",
    correctAnswer:
      "Tìm ra lỗi nhanh chóng, không yêu cầu viết và duy trì kiểm tra",
    wrong1: "Tìm ra lỗi nhanh chóng nhưng bắt buộc kiểm tra lại",
    wrong2: "Tìm ra lỗi nhanh chóng và không yêu cầu duy trì kiểm tra",
    wrong3: "Không yêu cầu viết và duy trì kiểm tra",
  },
  {
    questionText: "Nhận định nào sai?",
    correctAnswer:
      "Lập trình viên (developer) viết  đặc tả kỹ thuật (specitfication) của chương trình và người kiểm thử viết mô tả hoạt động (implementation) của chương trình",
    wrong1:
      "Người kiểm thử viết tài liệu đặc tả kỹ thuật của chương trình và  lập trình viên viết tài liệu mô tả hoạt động của chương trình",
    wrong2: "Lập trình viên và người kiểm thử phải riêng biệt",
    wrong3:
      "Nếu không có tài liệu đặc tả kỹ thuật của chương trình thì không có gì để kiểm thử",
  },
  {
    questionText: "Ưu điểm của kiểm thử thủ công là gì ?",
    correctAnswer: "Có độ bao phủ tốt hơn",
    wrong1: "Tìm thấy lỗi nhanh hơn",
    wrong2: "Nếu chương trình thay đổi, không cần sửa lại kịch bản kiểm thử",
    wrong3: "Không cần phải viết kịch bản kiểm thử",
  },
  {
    questionText:
      "Trong Công cụ kiểm thử ngẫu nhiên Monkey tool. Muốn chạy môt ứng dụng cụ thể dùng lệnh nào",
    correctAnswer: "-p <allowed-package-name>",
    wrong1: "--pct-appswitch <percent>",
    wrong2: "-app <allowed-package-name>",
    wrong3: "-app run <allowed-package-name>",
  },
  {
    questionText: "Kiểm thửu ngẫu nhiên (random testing) còn gọi là gì?",
    correctAnswer: "Fuzzing",
    wrong1: "Cuzzing",
    wrong2: "Stress testing",
    wrong3: "Auto testing",
  },
  {
    questionText: "Công cụ hỗ trợ kiểm thử ngẫu nhiên (fuzzing) là gì?",
    correctAnswer: "Google monkey tool",
    wrong1: "Korat",
    wrong2: "Randoop",
    wrong3: "Android studio",
  },
  {
    questionText: "Độ sâu của lỗi phụ thuộc vào đâu?",
    correctAnswer: "Thứ tự ràng buộc trên các luồng khác nhau",
    wrong1: "Thứ tự ràng buộc trên các luồng giống nhau",
    wrong2: "Thứ tự các câu lệnh trong một luồng",
    wrong3: "Số lượng các câu lệnh trong một luồng",
  },
  {
    questionText: "Random testing kém hiệu quả với trong loại ứng dụng nào ?",
    correctAnswer: "Ứng dụng bảo mật",
    wrong1: "Ứng dụng chạy song song",
    wrong2: "Ứng dụng di động",
    wrong3: "Ứng dụng nhiều tầng",
  },
  {
    questionText:
      "Một chương trình có n luồng, k bước thực hiện và d độ sâu. Xác suất nhỏ nhất để Cuzz tìm ra lỗi trong mỗi lần chạy:",
    correctAnswer: "1 / (n * k ^ (d-1))",
    wrong1: "1 / (n * k ^ (d - 2))",
    wrong2: "1 / (n * k ^ (d-3))",
    wrong3: "1 / (n * k ^ (d-4))",
  },
  {
    questionText: "Đâu không phải là một kiểu của Random Testing?",
    correctAnswer: "Tạo các kịch bản đầu vào dựa theo tài liệu đặc tả",
    wrong1: "Tạo chuỗi đầu vào ngẫu nhiên",
    wrong2: "Lựa chọn dữ liệu ngẫu nhiên từ cơ sở dữ liệu hiện có",
    wrong3: "Chuỗi đầu vào dữ liệu ngẫu nhiên",
  },
  {
    questionText:
      "Độ bao phủ kiểm tra ngẫu nhiên của bộ phân tích từ vựng trong một trình biên dịch là bao nhiêu?",
    correctAnswer: "100%",
    wrong1: "0,10%",
    wrong2: "10%",
    wrong3: "0,00%",
  },
  {
    questionText:
      "Có tối đa bao nhiêu dạng cây nhị phân hợp lệ với tối đa 3 đỉnh?",
    correctAnswer: 9,
    wrong1: 6,
    wrong2: 7,
    wrong3: 8,
  },
  {
    questionText:
      "Có tối đa bao nhiêu cây nhị phân có thể tạo ra nếu sử dụng K nút?",
    correctAnswer: "(K + 1) ^ (2K + 1)",
    wrong1: "(K + 1) ^ (2K + 2)",
    wrong2: "(K - 1) ^ (2K + 3)",
    wrong3: "(K - 1) ^ (2K + 4)",
  },
  {
    questionText: "Điều nào không đúng với Korat (sinh kiểm thử tự động)?",
    correctAnswer:
      "Mỗi trường hợp kiểm thử (test case) mới được sinh ra ra không phụ thuộc vào các trường hợp kiểm thử trước đó",
    wrong1:
      "Sử dụng và phân tích thông tin kiểu dữ liệu để phục vụ cho bộ sinh kiểm thử tự động",
    wrong2:
      "Tránh sinh ra các trường hợp kiểm thử  thừa, trùng lặp và không có ý nghĩa",
    wrong3: "Sử dụng kỹ thuật sinh kiểm thử tất định",
  },
  {
    questionText: "Điều nào không đúng với Randoop (sinh kiểm thử tự động)?",
    correctAnswer:
      "Mỗi trường hợp kiểm thử (test case) mới được sinh ra ra không phụ thuộc vào các trường hợp kiểm thử trước đó",
    wrong1:
      "Tránh sinh ra các trường hợp kiểm thử thừa, trùng lặp và không có ý nghĩa",
    wrong2: "Phù hợp để kiểm thử theo phương pháp tuần tự",
    wrong3:
      "Sử dụng và phân tích thông tin kiểu dữ liệu để phục vụ cho bộ sinh kiểm thử tự động",
  },
  {
    questionText: "Korat tốt trong trường hợp kiểm thử loại dữ liệu nào?",
    correctAnswer: "Dữ liệu liên kết có cấu trúc",
    wrong1: "Dữ liệu kiểu số tự nhiên",
    wrong2: "Dữ liệu kiểu số nguyên",
    wrong3: "Dữ liệu kiểu chuỗi ký tự",
  },
  {
    questionText:
      "Đâu là phương thức kiểm tra một Cây nhị phân hợp lệ trong Korat ?",
    correctAnswer: "repOk()",
    wrong1: "finBinaryTree()",
    wrong2: "numNodes(final Node n)",
    wrong3: "isOrdered(final Node n)",
  },
  {
    questionText:
      "Đâu là công dụng của thuật toán phân tích đạt định nghĩa (Reaching Definitions Analysis)?",
    correctAnswer:
      "Tìm ra sự sử dụng của các biến chưa được khởi tạo (Find usage of uninitialized variables)",
    wrong1: "Giảm kích thước đoạn mã (Reduce code size)",
    wrong2: "Tránh tính toán lại biểu thức (Avoid recomputing expressions)",
    wrong3: "Cấp phát thanh ghi hiệu quả (Allocate registers efficiently)",
  },
  {
    questionText:
      "Đâu là công dụng của thuật toán phân tích biểu thức bận (Very Busy Expression Analysis)?",
    correctAnswer: "Giảm kích thước đoạn mã (Reduce code size)",
    wrong1:
      "Tìm ra sự sử dụng của các biến chưa được khởi tạo (Find usage of uninitialized variables)",
    wrong2: "Tránh tính toán lại biểu thức (Avoid recomputing expressions)",
    wrong3: "Cấp phát thanh ghi hiệu quả (Allocate registers efficiently)",
  },
  {
    questionText:
      "Đâu là công dụng của thuật toán phân tích biểu thức khả dụng (Available Expression Analysis)?",
    correctAnswer:
      "Tránh tính toán lại biểu thức (Avoid recomputing expressions)",
    wrong1: "Giảm kích thước đoạn mã (Reduce code size)",
    wrong2:
      "Tìm ra sự sử dụng của các biến chưa được khởi tạo (Find usage of uninitialized variables)",
    wrong3: "Cấp phát thanh ghi hiệu quả (Allocate registers efficiently)",
  },
  {
    questionText:
      "Đâu là công dụng của thuật toán phân tích biến tồn tại (Live Variables Analysis)?",
    correctAnswer:
      "Cấp phát thanh ghi hiệu quả (Allocate registers efficiently)",
    wrong1: "Tránh tính toán lại biểu thức (Avoid recomputing expressions)",
    wrong2: "Giảm kích thước đoạn mã (Reduce code size)",
    wrong3:
      "Tìm ra sự sử dụng của các biến chưa được khởi tạo (Find usage of uninitialized variables)",
  },
  {
    questionText:
      "Mục tiêu của phân tích tiếp cận định nghĩa (reaching definitions analysis) là gì?",
    correctAnswer:
      "Với mỗi điểm trong chương trình, xác định phép định nghĩa nào đã được tạo ra và không bị định nghĩa lại suốt dọc đường đi từ khi phép định nghĩa được tạo ra đến điểm ấy, xét trên các đường dẫn khác nhau",
    wrong1:
      "Với mỗi điểm trong chương trình, xác định biểu thức nào đã được tính toán và sau đó không bị thay đổi trên tất cả các đường dẫn tới điểm ấy",
    wrong2:
      "Xác định các biểu thức mà không kể đường đi là đường nào, biểu thức ấy được sử dụng trước khi bất kỳ biến nào xuất hiện trong biểu thức bị định nghĩa lại",
    wrong3:
      "Với mỗi điểm trong chương trình, xác định các biến mà có đường dẫn từ điểm ấy tới nơi biến được sử dụng mà không bị định nghĩa lại trên đường",
  },
  {
    questionText:
      "Mục tiêu của phân tích biểu thức rất bận (very busy expressions analysis) là gì?",
    correctAnswer:
      "Xác định các biểu thức mà không kể đường đi là đường nào, biểu thức ấy được sử dụng trước khi bất kỳ biến nào xuất hiện trong biểu thức bị định nghĩa lại",
    wrong1:
      "Với mỗi điểm trong chương trình, xác định các biến mà có đường dẫn từ điểm ấy tới nơi biến được sử dụng mà không bị định nghĩa lại trên đường",
    wrong2:
      "Với mỗi điểm trong chương trình, xác định biểu thức nào đã được tính toán và sau đó không bị thay đổi trên tất cả các đường dẫn tới điểm ấy",
    wrong3:
      "Với mỗi điểm trong chương trình, xác định phép định nghĩa nào đã được tạo ra và không bị định nghĩa lại suốt dọc đường đi từ khi phép định nghĩa được tạo ra đến điểm ấy, xét trên các đường dẫn khác nhau",
  },
  {
    questionText:
      "Mục tiêu của phân tích biểu thức có sẵn (available expressions analysis) là gì?",
    correctAnswer:
      "Với mỗi điểm trong chương trình, xác định biểu thức nào đã được tính toán và sau đó không bị thay đổi trên tất cả các đường dẫn tới điểm ấy",
    wrong1:
      "Xác định các biểu thức mà không kể đường đi là đường nào, biểu thức ấy được sử dụng trước khi bất kỳ biến nào xuất hiện trong biểu thức bị định nghĩa lại",
    wrong2:
      "Với mỗi điểm trong chương trình, xác định phép định nghĩa nào đã được tạo ra và không bị định nghĩa lại suốt dọc đường đi từ khi phép định nghĩa được tạo ra đến điểm ấy, xét trên các đường dẫn khác nhau",
    wrong3:
      "Với mỗi điểm trong chương trình, xác định các biến mà có đường dẫn từ điểm ấy tới nơi biến được sử dụng mà không bị định nghĩa lại trên đường",
  },
  {
    questionText:
      "Mục tiêu của phân tích biến sống (live variables analysis) là gì?",
    correctAnswer:
      "Với mỗi điểm trong chương trình, xác định các biến mà có đường dẫn từ điểm ấy tới nơi biến được sử dụng mà không bị định nghĩa lại trên đường",
    wrong1:
      "Xác định các biểu thức mà không kể đường đi là đường nào, biểu thức ấy được sử dụng trước khi bất kỳ biến nào xuất hiện trong biểu thức bị định nghĩa lại",
    wrong2:
      "Với mỗi điểm trong chương trình, xác định biểu thức nào đã được tính toán và sau đó không bị thay đổi trên tất cả các đường dẫn tới điểm ấy",
    wrong3:
      "Với mỗi điểm trong chương trình, xác định phép định nghĩa nào đã được tạo ra và không bị định nghĩa lại suốt dọc đường đi từ khi phép định nghĩa được tạo ra đến điểm ấy, xét trên các đường dẫn khác nhau",
  },
  {
    questionText: "Phân tích luồng dữ liệu là gì?",
    correctAnswer:
      "Là một loại phân tích tĩnh để lập luận về luồng dữ liệu trong quá trình chạy của chương trình.",
    wrong1:
      "Là một loại phân tích động để lập luận về luồng dữ liệu trong quá trình chạy của chương trình.",
    wrong2: "Là một loại phân tích đầu vào của chương trình.",
    wrong3: "Là một loại phân tích đầu ra của chương trình.",
  },
  {
    questionText: "Tính dừng trong thuật toán là như thế nào?",
    correctAnswer: "Thuật toán phải dừng lại sau một số bước giải.",
    wrong1: "Thuật toán phải sử dụng ít phép toán nhất.",
    wrong2: "Thuật toán phải sử dụng dung lượng bộ nhớ là nhỏ nhất.",
    wrong3: "Các bước giải thuật toán phải rõ ràng.",
  },
  {
    questionText: "Câu lệnh nào không có trong ngôn ngữ WHILE?",
    correctAnswer: "function{S}",
    wrong1: "S1;S2",
    wrong2: "if(b){S1} else {S2}",
    wrong3: "while(b){S}",
  },
  {
    questionText:
      "Phân tích luồng dữ liệu (dataflow analysis) sẽ không đảm bảo tính chất nào (hy sinh - sacrificing tính chất nào) ?",
    correctAnswer: "Đúng đắn (Completeness )",
    wrong1: "Đầy đủ (Soundness)",
    wrong2: "Khả năng kết thúc (Termination)",
    wrong3: "Ổn định (Stable)",
  },
  {
    questionText: "Đâu không phải là phương pháp để phân tích luồng dữ liệu?",
    correctAnswer: "Mutation Expressions Analysis",
    wrong1: "Reaching Definitions Analysis",
    wrong2: "Very Busy Expressions Analysis",
    wrong3: "Available Expressions Analysis",
  },
  {
    questionText:
      "Đâu là nhận xét đúng nhất về tính hoàn chỉnh trong phân tích luồng dữ liệu?",
    correctAnswer: "Phân tích luồng dữ liệu hy sinh tính hoàn chỉnh",
    wrong1: "Phân tích luồng dữ liệu luôn luôn có tính hoàn chỉnh",
    wrong2: "Phân tích luồng dữ liệu có xác suất hoàn chỉnh cao",
    wrong3: "Phân tích luồng dữ liệu không đề cập đến tính hoàn chỉnh",
  },
  {
    questionText: "Phân tích luồng dữ liệu (dataflow analysis) là gì?",
    correctAnswer:
      "Là một loại phân tích tĩnh để lập luận về luồng dữ liệu trong các lần chạy của chương trình.",
    wrong1: "Là phân tích trương trình từ trên xuống dưới.",
    wrong2: "Là một loại kiểm thử ngẫu nhiên.",
    wrong3: "Là một loại kiểm thử tự động.",
  },
  {
    questionText:
      "Thuật toán phân tích con trỏ không phụ thuộc vào luồng (flow insensitive) là gì?",
    correctAnswer:
      "Thuật toán phân tích con trỏ trong một hàm (thủ tục) không phụ thuộc vào thứ tự câu lệnh trong hàm",
    wrong1:
      "Thuật toán phân tích con trỏ trong một hàm (thủ tục) phụ thuộc vào thứ tự câu lệnh trong hàm",
    wrong2:
      "Thuật toán phân tích con trỏ trong một chương trình không phụ thuộc vào thứ tự các câu lệnh trong chương trình",
    wrong3:
      "Thuật toán phân tích con trỏ trong một chương trình theo thứ tự các câu lệnh trong chương trình",
  },
  {
    questionText:
      "Phân tích con trỏ (pointer analysis) sẽ không đảm bảo tính chất nào (hy sinh (sacrificing) tính chất nào)?",
    correctAnswer: "Đúng đắn (Completeness )",
    wrong1: "Đầy đủ (Soundness)",
    wrong2: "Khả năng kết thúc (Termination)",
    wrong3: "Ổn định (Stable)",
  },
  {
    questionText: "Truy cập dữ liệu con trỏ (pointer dereference) là gì?",
    correctAnswer:
      "Thao tác với con trỏ (pointer) trong các ngôn ngữ lập trình, cho biết nội dung hoặc giá trị của địa chỉ mà nó đang trỏ tới",
    wrong1: "Trỏ một con trỏ tới vị trí rỗng (null)",
    wrong2: "Xoá con trỏ",
    wrong3: "Lấy giá trị địa chỉ của con trỏ",
  },
  {
    questionText:
      "Một ngôn ngữ thế nào là Turing hoàn chỉnh (Turing complete)?",
    correctAnswer: "Có thể giải quyết được tất cả các bài toán",
    wrong1: "Chỉ giải quyết một lớp bài toán cụ thể",
    wrong2: "Là ngôn ngữ do Turing sáng tạo ra",
    wrong3: "Là ngôn ngữ lập trình bậc cao",
  },
  {
    questionText:
      "Trong phân tích truy cập dữ liệu con trỏ (null pointer dereference analysis). Di chuyển xuôi (foward travesal) là gì?",
    correctAnswer:
      "Bắt đầu từ một điểm trong trương trình nơi con trỏ được gán bằng rỗng (null), kiểm tra xem liệu có thể đi đến một điểm trong chương trình nơi con trỏ được truy cập dữ liệu (dereference)",
    wrong1:
      "Bắt đầu từ một điểm nơi con trỏ được truy cập dữ liệu (dereference), kiểm tra xem liệu có một điểm khác trong chương trình nơi con con trỏ được gán bằng null có thể đi đến điểm đó không",
    wrong2: "Bắt đầu từ đầu chương trình tới cuối chương trình",
    wrong3: "Bắt đầu từ cuối chương trình tới đầu chương trình",
  },
  {
    questionText:
      "Trong  phân tích truy cập dữ liệu con trỏ (null pointer dereference analysis). Di chuyển ngược (backward travesal) là gì?",
    correctAnswer:
      "Bắt đầu từ một điểm nơi con trỏ được truy cập dữ liệu (dereference), kiểm tra xem liệu có một điểm khác trong chương trình nơi con con trỏ được gán bằng rỗng (null) có thể đi đến điểm đó không",
    wrong1:
      "Bắt đầu từ một điểm trong trương trình nơi con trỏ được gán bằng rỗng (null), kiểm tra xem liệu có thể đi đến một điểm trong chương trình nơi con trỏ được truy cập dữ liệu (dereference)",
    wrong2: "Bắt đầu từ cuối chương trình tới đầu chương trình",
    wrong3: "Bắt đầu từ đầu chương trình tới cuối chương trình",
  },
  {
    questionText: "Datalog là gì?",
    correctAnswer:
      "Ngôn ngữ lập trình được sử dụng trong cơ sở dữ liệu suy diễn",
    wrong1: "Ngôn ngữ đánh dấu siêu văn bản",
    wrong2: "Cơ sở ngữ nghĩa",
    wrong3: "Biểu đồ tri thức",
  },
  {
    questionText:
      "Câu lệnh nào sau đây sử dụng tham chiếu ngược (dereference)?",
    correctAnswer: "baz = *foo",
    wrong1: "baz = foo",
    wrong2: "baz = &foo",
    wrong3: "baz = &(&foo)",
  },
  {
    questionText:
      "Các ngôn ngữ lập trình nào là ngôn ngữ ràng buộc (constraint language)?",
    correctAnswer: "Datalog, SAT, MaxSAT, SMT, MaxSMT",
    wrong1: "SAT, MaxSAT, SMT, MaxSMT, C++",
    wrong2: "SAT, MaxSAT, Java, MaxSMT",
    wrong3: "SAT, MaxSAT, C#, MaxSMT",
  },
  {
    questionText:
      "Câu lệnh GEN[n] trong phân tích định nghĩa tiếp cận (reaching definition analysis) nói lên điều gì ?",
    correctAnswer:
      "Là tập các định nghĩa được tạo ra tại điểm n của chương trình",
    wrong1:
      "Là tập hợp các định nghĩa bị loại bỏ tại một điểm n của chương trình",
    wrong2:
      "Là tập các điểm chương trình ngay đằng trước điểm n của chương trình",
    wrong3:
      "Là tập các điểm chương trình ngay đằng sau điểm n của chương trình",
  },
  {
    questionText: "Đâu là ưu điểm của Kiểm thử ngẫu nhiên (Random Testing)?",
    correctAnswer: "Dễ dàng thực hiện.",
    wrong1: "Không hiệu quả với tập hợp các trường hợp kiểm thử.",
    wrong2: "Có thể tìm những lỗi không quan trọng.",
    wrong3: "Độ phủ tốt.",
  },
  {
    questionText:
      "Kiểm thử ngẫu nhiên (random testing) hiệu quả với các trường hợp nào?",
    correctAnswer:
      "Kiểm thử bảo mật (Testing Security), Ứng dụng điện thoại (Mobile Apps),  Xử lý đồng thời (Concurrency).",
    wrong1:
      "Kiểm thử bảo mật (Testing Security), Ứng dụng Website (Website Apps),  Xử lý đồng thời (Concurrency).",
    wrong2:
      "Kiểm thử bảo mật (Testing Security), Xử lý đồng thời (Concurrency).",
    wrong3:
      "Kiểm thử bảo mật (Testing Security), Ứng dụng điện thoại (Mobile Apps),  Xử lý song song (Parallelism).",
  },
  {
    questionText:
      "Việc sinh ra Kiểm thử tự động (Automatic Test Generation) giúp tránh được điều gì?",
    correctAnswer:
      "Tránh việc sinh Ca kiểm thử bất hợp pháp và Ca kiểm thử dư thừa.",
    wrong1: "Tránh việc sinh ca kiểm thử bất hợp pháp",
    wrong2: "Tránh việc sinh ca kiểm thử dư thừa.",
    wrong3: "Tránh việc sinh ca kiểm thử không tự động.",
  },
  {
    questionText:
      "Nguyên nhân chính của sự không đầy đủ trong Phân tích luồng dữ liệu (incompleteness in dataflow analyses) phát sinh từ đâu?",
    correctAnswer:
      "Từ việc trừu tượng hóa các điều kiện luồng kiểm soát với lựa chọn không xác định.",
    wrong1:
      "Từ việc không trừu tượng hóa các điều kiện luồng kiểm soát với lựa chọn không xác định.",
    wrong2: "Từ việc trừu tượng hóa các điều kiện luồng kiểm soát.",
    wrong3: "Từ việc lựa chọn không xác định các luồng dữ liệu.",
  },
  {
    questionText: "Kết quả của phân tích luồng dữ liệu là gì?",
    correctAnswer:
      "Là một tập hợp các dữ kiện tại mỗi thời điểm của chương trình.",
    wrong1:
      "Là một tập hợp các dữ kiện tại sau khi chạy xong toàn bộ chương trình.",
    wrong2: "Là một tập hợp các dữ kiện.",
    wrong3: "Là các dữ kiện tại mỗi thời điểm của chương trình.",
  },
  {
    questionText: "Thuật toán phân tích con trỏ có mấy loại?",
    correctAnswer:
      "2 loại gồm Luồng nhạy (Flow-sensitive) và Luồng không nhạy (Flow-insensitive).",
    wrong1: "Chỉ có Luồng nhạy (Flow-sensitive).",
    wrong2: "Chỉ có Luồng không nhạy (Flow-insensitive).",
    wrong3: "Không phân chia thành loại nào.",
  },
  {
    questionText:
      "Thuật toán phân tích con trỏ có luồng nhạy (Flow-sensitve pointer analysis algorithms) thực hiện cập nhật mạnh mẽ khi nào?",
    correctAnswer:
      "Khi có thể loại bỏ dữ kiện cũ khi đang sinh ra dữ kiện mới.",
    wrong1: "Khi có thể loại bỏ dữ kiện cũ.",
    wrong2: "Khi sinh ra dữ kiện mới.",
    wrong3: "Đọc toàn bộ dữ kiện cũ và dữ kiện mới được thêm vào.",
  },
  {
    questionText: "Khi sử dụng SAT, người ta phải xác định vấn đề gì?",
    correctAnswer:
      "Làm rõ vấn đề xác định xem một tập hợp các ràng buộc Boolean có thỏa mãn hay không.",
    wrong1:
      "Làm rõ vấn đề xác định xem một tập hợp các ràng buộc về mọi kiểu dữ liệu có thỏa mãn hay không.",
    wrong2: "Không cần phân tích vấn đề vì ràng buộc Boolean luôn thoả mãn.",
    wrong3:
      "Làm rõ vấn đề xác định xem một tập hợp các kiểu dữ liệu Boolean có thỏa mãn hay không.",
  },
  {
    questionText: "Đâu là lợi ích của phân tích ràng buộc?",
    correctAnswer: "Cho phép triển khai phân tích phức tạp",
    wrong1: "Gộp đặc điểm kỹ thuật phân tích vào việc triển khai",
    wrong2: "Cho biết những thông số của chương trình tự nhiên",
    wrong3: "Triển khai dễ dàng hơn",
  },
  {
    questionText: "Nội dung nào sau đây mô tả chính xác về kiểm thử tự động?",
    correctAnswer:
      "Tìm lỗi nhanh hơn.\nKhông cần phải viết bài kiểm tra. \nNếu phần mềm thay đổi, không cần duy trì kiểm thử.",
    wrong1: "Bộ kiểm tra hiệu quả.\nCó khả năng bảo hiểm tốt hơn.",
    wrong2:
      "Có thể làm việc với mã không thể sửa đổi.\nKhông cần phân tích hoặc nghiên cứu mã.\nMã có thể ở bất kỳ định dạng nào (được quản lý, nhị phân, bị xáo trộn).",
    wrong3: "Bộ kiểm tra đơn giản.\nHIệu quả cao.",
  },
  {
    questionText: "Nội dung nào sau đây mô tả chính xác về kiểm thử hộp đen?",
    correctAnswer:
      "Có thể làm việc với mã không thể sửa đổi.\nKhông cần phân tích hoặc nghiên cứu mã.\nMã có thể ở bất kỳ định dạng nào (được quản lý, nhị phân, bị xáo trộn).",
    wrong1: "Bộ kiểm tra đơn giản.\nHIệu quả cao.",
    wrong2:
      "Tìm lỗi nhanh hơn.\nKhông cần phải viết bài kiểm tra. \nNếu phần mềm thay đổi, không cần duy trì kiểm thử.",
    wrong3: "Bộ kiểm tra hiệu quả.\nCó khả năng bảo hiểm tốt hơn.",
  },
  {
    questionText: "Nội dung nào sau đây mô tả chính xác về kiểm thử bằng tay?",
    correctAnswer: "Bộ kiểm tra hiệu quả.\nCó khả năng bảo hiểm tốt hơn.",
    wrong1:
      "Tìm lỗi nhanh hơn.\nKhông cần phải viết bài kiểm tra. \nNếu phần mềm thay đổi, không cần duy trì kiểm thử.",
    wrong2:
      "Có thể làm việc với mã không thể sửa đổi.\nKhông cần phân tích hoặc nghiên cứu mã.\nMã có thể ở bất kỳ định dạng nào (được quản lý, nhị phân, bị xáo trộn).",
    wrong3: "Bộ kiểm tra đơn giản.\nHIệu quả cao.",
  },
  {
    questionText: "Nội dung nào sau đây mô tả chính xác về kiểm thử hộp trắng?",
    correctAnswer: "Bộ kiểm tra hiệu quả.\nCó khả năng bảo hiểm tốt hơn.",
    wrong1: "Bộ kiểm tra đơn giản.\nHIệu quả cao.",
    wrong2:
      "Có thể làm việc với mã không thể sửa đổi.\nKhông cần phân tích hoặc nghiên cứu mã.\nMã có thể ở bất kỳ định dạng nào (được quản lý, nhị phân, bị xáo trộn).",
    wrong3:
      "Tìm lỗi nhanh hơn.\nKhông cần phải viết bài kiểm tra. \nNếu phần mềm thay đổi, không cần duy trì kiểm thử.",
  },
  {
    questionText:
      "Nội dung nào sau đây mô tả chính xác về trình kiểm thử Korat?",
    correctAnswer:
      "Korat là một kỹ thuật tạo thử nghiệm hoàn toàn xác định.\nKorat tránh được sự dư thừa bằng cách kiểm tra các cấu trúc mới được tạo để tìm cấu trúc đẳng cấu với các cấu trúc được tạo trước đó.\nKorat phù hợp hơn để tạo cấu trúc dữ liệu.",
    wrong1:
      "Koratsử dụng một yếu tố ngẫu nhiên.\nKorat tránh được sự dư thừa bằng cách kiểm tra các cấu trúc mới được tạo để tìm cấu trúc đẳng cấu với các cấu trúc được tạo trước đó.\nKorat phù hợp hơn để tạo cấu trúc dữ liệu.",
    wrong2:
      "Korat là một kỹ thuật tạo thử nghiệm hoàn toàn xác định.\nKorat tránh được sự dư thừa thông qua phương pháp loại bỏ các trường hợp thử nghiệm trong đó đối tượng cuối cùng được tạo đã được tạo trong trường hợp thử nghiệm trước đó.\nKorat phù hợp hơn để tạo cấu trúc dữ liệu.",
    wrong3:
      "Koratsử dụng một yếu tố ngẫu nhiên.\nKorat tránh được sự dư thừa bằng cách kiểm tra các cấu trúc mới được tạo để tìm cấu trúc đẳng cấu với các cấu trúc được tạo trước đó.\nKorat phù hợp để tạo chuỗi các phương thức từ API.",
  },
  {
    questionText:
      "Nội dung nào sau đây mô tả chính xác về trình kiểm thử Randoop?",
    correctAnswer:
      "Randoop sử dụng một yếu tố ngẫu nhiên.\nRandoop tránh được sự dư thừa thông qua phương pháp loại bỏ các trường hợp thử nghiệm trong đó đối tượng cuối cùng được tạo đã được tạo trong trường hợp thử nghiệm trước đó.\nRandoop phù hợp để tạo chuỗi các phương thức từ API.",
    wrong1:
      "Randoop là một kỹ thuật tạo thử nghiệm hoàn toàn xác định.\nRandoop tránh được sự dư thừa thông qua phương pháp loại bỏ các trường hợp thử nghiệm trong đó đối tượng cuối cùng được tạo đã được tạo trong trường hợp thử nghiệm trước đó.\nRandoop phù hợp để tạo chuỗi các phương thức từ API.",
    wrong2:
      "Randoop sử dụng một yếu tố ngẫu nhiên.\nRandoop tránh được sự dư thừa bằng cách kiểm tra các cấu trúc mới được tạo để tìm cấu trúc đẳng cấu với các cấu trúc được tạo trước đó.\nRandoop phù hợp để tạo chuỗi các phương thức từ API.",
    wrong3:
      "Randoop sử dụng một yếu tố ngẫu nhiên.\nRandoop tránh được sự dư thừa thông qua phương pháp loại bỏ các trường hợp thử nghiệm trong đó đối tượng cuối cùng được tạo đã được tạo trong trường hợp thử nghiệm trước đó.\nRandoop phù hợp hơn để tạo cấu trúc dữ liệu.",
  },
  {
    questionText: "Điều nào sau đây đúng về công cụ phần mềm?",
    correctAnswer:
      "Bao gồm các công cụ lập trình viên sử dụng cho các tác vụ để cải thiện chất lượng phần mềm.",
    wrong1:
      "Công cụ phần mềm dùng để biên dịch các ngôn ngữ lập trình bậc cao thành ngôn ngữ máy.",
    wrong2: "Bao gồm các công cụ lập trình viên sử dụng để gỡ lỗi.",
    wrong3: "Bao gồm các công cụ lập trình viên sử dụng để phát hiện lỗi.",
  },
  {
    questionText: "Mức độ bao phủ mã ảnh hưởng thế nào đến một bộ thử nghiệm?",
    correctAnswer:
      "Mức độ bao phủ mã cao hơn thường chỉ ra một bộ thử nghiệm tốt hơn.",
    wrong1:
      "Mức độ bao phủ mã cao hơn thường chỉ ra một bộ thử nghiệm kém hơn.",
    wrong2:
      "Mức độ bao phủ mã thấp hơn thường chỉ ra một bộ thử nghiệm cao hơn.",
    wrong3: "Mức độ bao phủ mã không ảnh hưởng đến một bộ thử nghiệm.",
  },
  {
    questionText: "Ý tưởng cơ bản của phân tích đột biến là gì",
    correctAnswer:
      "Kiểm tra các biến thể (đột biến) của chương trình đang thử nghiệm.",
    wrong1: "Kiểm tra chương trình hiện tại với nhiều bộ đầu vào khác nhau.",
    wrong2: "Kiểm tra chương trình hiện tại chỉ với một bộ đầu vào duy nhất.",
    wrong3:
      "Kiểm tra chương trình hiện tại trong nhiều môi trường máy chủ khác nhau.",
  },
  {
    questionText: "Phương pháp nào để đánh giá chất lượng bộ thử nghiệm?",
    correctAnswer: "Chỉ số về độ bao phủ của mã và phân tích đột biến.",
    wrong1: "Chỉ có chỉ số về độ bao phủ của mã.",
    wrong2: "Chỉ có phân tích đột biến",
    wrong3: "Không có phương pháp nào đánh giá được chất lượng bộ thử nghiệm.",
  },
  {
    questionText: "Biểu đồ luồng điều khiển là gì?",
    correctAnswer:
      "Biểu đồ tóm tắt luồng điều khiển trong tất cả các lần chạy của chương trình.",
    wrong1: "Biểu đồ thể hiện kết quả của chương trình.",
    wrong2: "Biểu đồ đánh giá chất lượng của các bộ thử nghiệm đầu vào.",
    wrong3: "Biểu đồ thể hiện thời gian chạy của chương trình.",
  },
  {
    questionText: "Kỹ thuật nào được công cụ Korat sử dụng?",
    correctAnswer: "Xác định tiền điều kiện.",
    wrong1: "Xác định hậu điều kiện.",
    wrong2: "Không kiểm tra tiền điều kiện.",
    wrong3: "Không kiểm tra hậu điều kiện.",
  },
  {
    questionText: "Đâu không phải là tiền điều kiện của một cây nhị phân?",
    correctAnswer: "Gốc không được rỗng.",
    wrong1: "Gốc có thể rỗng.",
    wrong2: "Mọi nút ngoại trừ gốc phải có một nút cha.",
    wrong3: "Cây nhị phân không được có chu kỳ.",
  },
];

let result = questions.map((q) => {
  let i = Math.floor(Math.random() * 4);
  let trueObj = { answerText: q.correctAnswer, isCorrect: true };
  let obj = {
    questionText: q.questionText,
    answerOptions: [
      { answerText: q.wrong1, isCorrect: false },
      { answerText: q.wrong2, isCorrect: false },
      { answerText: q.wrong3, isCorrect: false },
    ],
  };
  obj.answerOptions.splice(i, 0, trueObj);
  return obj;
});

export default result;
