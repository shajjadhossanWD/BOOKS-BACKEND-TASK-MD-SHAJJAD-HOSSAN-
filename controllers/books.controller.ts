import { Request, NextFunction, Response } from 'express';
import BookModel, { IBook } from '../models/books.model';
import { CatchAsyncError } from "../middleware/catchAsyncError";
import ErrorHandler from "../utils/ErrorHandler";


export const uploadBook = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
    const {
        name,
        publicationDate,
        description,
        price,
        genres,
        author
    }: IBook = req.body;

    try {
      if(req.user?.role === 'author'){
        const newBookData: Partial<IBook> = {
            name,
            publicationDate,
            description,
            price,
            genres,
            author,
        };

        const newBook: IBook = new BookModel(newBookData);

        await newBook.save();

        res.status(200).json({ 
            success: true, 
            message: 'Book & author uploaded successfully', 
            data: newBook 
        });
      }else{
        res.status(400).json({
            message: 'Unable to access Add Book & author only Author can Add.'
        })
      }
   
    } catch (error: any) {
        return next(new ErrorHandler(error.message, 400));
    }
});



export const updateBook = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
    const BookId = req.params.id; 

    try {
      if(req.user?.role === 'author'){
  
        const existingBook: IBook | null = await BookModel.findById(BookId);
        if (!existingBook) {
            return next(new ErrorHandler('Book not found', 404));
        }
        const {
            name,
            publicationDate,
            description,
            price,
            genres,
            author,
        }: IBook = req.body;

        const updatedBookData: Partial<IBook> = {};

        if (name) updatedBookData.name = name;
        if (publicationDate) updatedBookData.publicationDate = publicationDate;
        if (description) updatedBookData.description = description;
        if (price) updatedBookData.price = price;
        if (genres) updatedBookData.genres = genres;
        if (author) updatedBookData.author = author;

        const updatedBook: IBook | null = await BookModel.findByIdAndUpdate(
            BookId,
            updatedBookData,
            { new: true }
        );

        if (!updatedBook) {
            return next(new ErrorHandler('Failed to update Book&author', 500));
        }

        res.status(200).json({ 
            success: true, 
            message: 'Book & author updated successfully', 
            data: updatedBook 
        });
    }else{
        res.status(400).json({
            message: 'Unable to access Update Book & author only Author can Add.'
        })
      }

    } catch (error: any) {
        return next(new ErrorHandler(error.message, 400));
    }
});


export const getAllBooks = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
    try {
        const Books = await BookModel.find();

        const modifiedBooks = Books.map(Book => {
            const words = Book.description.split(' ');

            const truncatedDescription = words.slice(0, 10).join(' ');
            const finalDescription = words.length > 10 ? truncatedDescription + '...' : truncatedDescription;
            return {
                ...Book.toObject(),
                description: finalDescription
            };
        });

        res.status(200).json({ 
            success: true, 
            data: modifiedBooks 
        });
    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
    }
});


export const getAllBooksAuthor = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
    try {
        const Books = await BookModel.find().select('name author');
        res.status(200).json({ 
            success: true, 
            data: Books 
        });
    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
    }
});

export const getAllBooksAdmin = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
    try {
       if(req.user.role === 'author'){ 
        const Books = await BookModel.find();
        res.status(200).json({ 
            success: true, 
            data: Books 
        });
    }else{
        res.status(400).json({
            message: 'Unable to access get all Book & author only Author can Add.'
        })
      } 
    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
    }
});


export const getBookById = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const BookId = req.params.id;

        const Book = await BookModel.findById(BookId);

        if (!Book) {
            return next(new ErrorHandler('Book & author not found', 404));
        }

        res.status(200).json({ 
            success: true, 
            data: Book
       });
    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
    }
});


export const deleteBookById = CatchAsyncError(
     async (req: Request, res: Response, next: NextFunction) => {
    try {
      if(req.user.role === 'author'){  
        const BookId = req.params.id;
        const deletedBook = await BookModel.findByIdAndDelete(BookId);

        if (!deletedBook) {
            return next(new ErrorHandler('Book & author not found', 404));
        }

        res.status(200).json({ 
            success: true, 
            message: 'Book deleted successfully', 
            data: deletedBook 
        });
    }else{
        res.status(400).json({
            message: 'Unable to access Add Book & author only Author can Add.'
        })
     }
    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
    }
});

export const deleteAllBooks = CatchAsyncError(
     async (req: Request, res: Response, next: NextFunction) => {
    try {
      if(req.user.role === 'author'){  
        await BookModel.deleteMany({});

        res.status(200).json({ 
            success: true, 
            message: 'All Books & author deleted successfully' 
        });
     }else{
        res.status(400).json({
            message: 'Unable to access Add Book & author only Author can Add.'
        })
      }
    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
    }
});

